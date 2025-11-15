import React, { useEffect, useState } from "react";
import { CurrencyData, CurrencyHeader, CurrencyStyle } from "./Currency.styled";

const Currency = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates.");
        }
        const data = await response.json();
        setRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  const currencies = ["USD", "EUR", "GBP", "JPY"];

  return (
    <CurrencyStyle>
      <CurrencyHeader>
        <div style={{ width: "50px" }}>Currency</div>
        <div style={{ width: "50px" }}>Buy</div>
        <div style={{ width: "50px" }}>Sell</div>
      </CurrencyHeader>
      <div style={{ marginBlockStart: "20px" }}>
        {currencies.map((currency, index) => (
          <CurrencyData key={index}>
            <div style={{ width: "50px" }}>{currency}</div>
            <div style={{ width: "50px" }}>
              {rates ? rates[currency]?.toFixed(2) : "loading..."}
            </div>
            <div style={{ width: "50px" }}>
              {rates ? (rates[currency] * 1.02)?.toFixed(2) : "loading..."}
            </div>
          </CurrencyData>
        ))}
      </div>
    </CurrencyStyle>
  );
};

export default Currency;

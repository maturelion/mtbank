import React from "react";
import { CurrencyData, CurrencyHeader, CurrencyStyle } from "./Currency.styled";

const Currency = () => {
  return (
    <CurrencyStyle>
      <CurrencyHeader>
        <div style={{ width: "50px" }}>Currency</div>
        <div style={{ width: "50px" }}>Price</div>
        <div style={{ width: "50px" }}>Rates</div>
      </CurrencyHeader>
      <div style={{ marginBlockStart: "20px" }}>
        {[
          {
            name: "USD",
          },
          {
            name: "EURO",
          },
          {
            name: "POND",
          },
          {
            name: "JPY",
          },
        ].map((curency, index) => (
          <CurrencyData key={index}>
            <div style={{ width: "50px" }}>{curency.name}</div>
            <div style={{ width: "50px" }}>1.00</div>
            <div style={{ width: "50px" }}>loading...</div>
          </CurrencyData>
        ))}
      </div>
    </CurrencyStyle>
  );
};

export default Currency;

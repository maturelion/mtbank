import React from "react";
import { PocketStyle } from "./Pocket.styled";
import CreditCards from "../../components/CreditCards/CreditCards";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Pocket = () => {
  const navigate = useNavigate()
  const cardDetails = [
    {
      card_name: "Biancaliza",
      card_number: "1234 5678 9000 0000",
      card_caption: "Saving Balance",
      card_balance: 1_000.0,
      bg_img: "img/credit-card-bg1.png",
    },
    {
      card_name: "Biancaliza",
      card_number: "1234 5678 9000 0001",
      card_caption: "Family Balance",
      card_balance: 1_500.0,
      bg_img: "img/credit-card-bg2.png",
    },
    {
      card_name: "Biancaliza",
      card_number: "1234 5678 9000 0002",
      card_caption: "Investment Balance",
      card_balance: 10_000.0,
      bg_img: "img/credit-card-bg3.png",
    },
    {
      card_name: "Biancaliza",
      card_number: "1234 5678 9000 0002",
      card_caption: "Alms Balance",
      card_balance: 5_000.0,
      bg_img: "img/credit-card-bg4.png",
    },
  ];

  return (
    <>
      <TopBar
        center="Pocket"
        left={
          <svg
            onClick={() => {
              navigate(-1);
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 5.92999L3.5 12L9.57 18.07"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12H3.67004"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12L12 12"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <PocketStyle>
        {/* <Tabs></Tabs> */}
        <CreditCards cardDetails={cardDetails} />
      </PocketStyle>
      <Footer />
    </>
  );
};

export default Pocket;

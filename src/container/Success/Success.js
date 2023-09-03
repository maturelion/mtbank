import React from "react";
import { SuccessButtonWrapper, SuccessStyle } from "./Success.styled";
import TopBar from "../../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { formatter } from "../../utils.js/currencyFormart";

const Success = (props) => {
  const { amount } = props;
  const navigate = useNavigate();

  return (
    <>
      <TopBar
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
        center=""
        right={""}
      />
      <SuccessStyle>
        <svg
          style={{ marginBlockEnd: "16px" }}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 73.3334C58.3333 73.3334 73.3333 58.3334 73.3333 40.0001C73.3333 21.6667 58.3333 6.66675 40 6.66675C21.6667 6.66675 6.66666 21.6667 6.66666 40.0001C6.66666 58.3334 21.6667 73.3334 40 73.3334Z"
            fill="#FFC300"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.8333 40L35.2667 49.4333L54.1667 30.5667"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ color: "#FFC300" }}>Payment Pending</div>
        <div
          style={{ marginBlock: "32px", fontSize: "32px", fontWeight: "bold" }}
        >
          {formatter.format(amount)}
        </div>
        <div style={{ color: "#606060" }}>You payment is pending</div>

        <SuccessButtonWrapper>
          <Button
            children="Back Home"
            type="button"
            onClick={() => navigate("/")}
          />
        </SuccessButtonWrapper>
      </SuccessStyle>
    </>
  );
};

export default Success;

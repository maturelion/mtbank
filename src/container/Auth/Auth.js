import React from "react";
import { AuthStyle } from "./Auth.styled";
import Number from "../../components/Number/Number";
import Pin from "../../components/Pin/Pin";

const Auth = () => {
  return (
    <AuthStyle>
      <Pin
        icon={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16.6666V13.3333C10 7.81665 11.6667 3.33331 20 3.33331C28.3333 3.33331 30 7.81665 30 13.3333V16.6666"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.3333 36.6667H11.6666C4.99998 36.6667 3.33331 35 3.33331 28.3334V25C3.33331 18.3334 4.99998 16.6667 11.6666 16.6667H28.3333C35 16.6667 36.6666 18.3334 36.6666 25V28.3334C36.6666 35 35 36.6667 28.3333 36.6667Z"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6608 26.6666H26.6758"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9925 26.6666H20.0074"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3242 26.6666H13.3391"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        text={
          <div style={{ marginBlockStart: "40px" }}>Enter security Code</div>
        }
      />
      <Number />
    </AuthStyle>
  );
};

export default Auth;

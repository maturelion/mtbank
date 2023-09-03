import React from "react";
import { FeatureItem, FeatureStyle } from "./Feature.styled";

const Feature = () => {
  return (
    <FeatureStyle>
      <FeatureItem to="/send">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 13.75C10 14.72 10.75 15.5 11.67 15.5H13.55C14.35 15.5 15 14.82 15 13.97C15 13.06 14.6 12.73 14.01 12.52L11 11.47C10.41 11.26 10.01 10.94 10.01 10.02C10.01 9.17999 10.66 8.48999 11.46 8.48999H13.34C14.26 8.48999 15.01 9.26999 15.01 10.24"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 7.5V16.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 6V2H18.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 7L22.5 2"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>Send</div>
      </FeatureItem>
      <FeatureItem to="/request">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 13.75C10 14.72 10.75 15.5 11.67 15.5H13.55C14.35 15.5 15 14.82 15 13.97C15 13.06 14.6 12.73 14.01 12.52L11 11.47C10.41 11.26 10.01 10.94 10.01 10.02C10.01 9.17999 10.66 8.48999 11.46 8.48999H13.34C14.26 8.48999 15.01 9.26999 15.01 10.24"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 7.5V16.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 3V7H21.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 2L17.5 7"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div>Request</div>
      </FeatureItem>
      <FeatureItem to="/history">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.23 19.7C8.05 18.82 9.3 18.89 10.02 19.85L11.03 21.2C11.84 22.27 13.15 22.27 13.96 21.2L14.97 19.85C15.69 18.89 16.94 18.82 17.76 19.7C19.54 21.6 20.99 20.97 20.99 18.31V7.04C21 3.01 20.06 2 16.28 2H8.72C4.94 2 4 3.01 4 7.04V18.3C4 20.97 5.46 21.59 7.23 19.7Z"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 7H16.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11H15.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div>History</div>
      </FeatureItem>
    </FeatureStyle>
  );
};

export default Feature;

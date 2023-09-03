import React from "react";
import { NumberButton, NumberStyle } from "./Number.styled";

const Number = () => {
  return (
    <NumberStyle>
      {[
        {
          name: 1,
        },
        {
          name: 2,
        },
        {
          name: 3,
        },
        {
          name: 4,
        },
        {
          name: 5,
        },
        {
          name: 6,
        },
        {
          name: 7,
        },
        {
          name: 8,
        },
        {
          name: 9,
        },
        {},
        {
          name: 0,
        },
        {
          name: (
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5 20L15.5 12M23.5 12L15.5 20"
                stroke="#2D2D2D"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10.7 6.40004C10.9484 6.06885 11.2705 5.80004 11.6408 5.6149C12.0111 5.42976 12.4194 5.33337 12.8334 5.33337H27.5C28.2073 5.33337 28.8855 5.61433 29.3856 6.11442C29.8857 6.61452 30.1667 7.2928 30.1667 8.00004V24C30.1667 24.7073 29.8857 25.3856 29.3856 25.8857C28.8855 26.3858 28.2073 26.6667 27.5 26.6667H12.8334C12.4194 26.6667 12.0111 26.5703 11.6408 26.3852C11.2705 26.2 10.9484 25.9312 10.7 25.6L4.70002 17.6C4.35383 17.1385 4.16669 16.577 4.16669 16C4.16669 15.4231 4.35383 14.8616 4.70002 14.4L10.7 6.40004Z"
                stroke="#2D2D2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ].map((data, index) => (
        <NumberButton key={index}>{data.name}</NumberButton>
      ))}
    </NumberStyle>
  );
};

export default Number;

import React from "react";
import {
  PinText,
  // PinTextPhoneNumber,
  VerifyButtonWrapper,
  VerifyStyle,
} from "./Verify.styled";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import Button from "../../components/Button/Button";
import Pin from "../../components/Pin/Pin";

const Verify = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const pin = inputValues.join("");
    // console.log(pin);
  };

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
        center="Verify"
        right={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V13"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9945 16H12.0035"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <VerifyStyle onSubmit={handleSubmit}>
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
                d="M29.9667 17.9833V24.65C29.9667 25.0833 29.95 25.5 29.9 25.9C29.5167 30.4 26.8667 32.6333 21.9833 32.6333H21.3167C20.9 32.6333 20.5 32.8333 20.25 33.1667L18.25 35.8333C17.3667 37.0167 15.9333 37.0167 15.05 35.8333L13.05 33.1667C12.8333 32.8833 12.35 32.6333 11.9833 32.6333H11.3167C6.00002 32.6333 3.33334 31.3167 3.33334 24.65V17.9833C3.33334 13.1 5.58336 10.45 10.0667 10.0667C10.4667 10.0167 10.8834 10 11.3167 10H21.9833C27.3 10 29.9667 12.6667 29.9667 17.9833Z"
                stroke="#05BE71"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36.6334 11.3167V17.9833C36.6334 22.8833 34.3833 25.5167 29.9 25.9C29.95 25.5 29.9667 25.0833 29.9667 24.65V17.9833C29.9667 12.6667 27.3 9.99999 21.9833 9.99999H11.3167C10.8833 9.99999 10.4667 10.0167 10.0667 10.0667C10.45 5.58334 13.1 3.33333 17.9833 3.33333H28.65C33.9667 3.33333 36.6334 6.00001 36.6334 11.3167Z"
                stroke="#05BE71"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.4925 22.0833H22.5075"
                stroke="#05BE71"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6592 22.0833H16.6742"
                stroke="#05BE71"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8258 22.0833H10.8408"
                stroke="#05BE71"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          text={
            <PinText>
              Enter the verification code that we sent to you email
              {/* <PinTextPhoneNumber style={{ color: "#05BE71" }}>
                +62 855 - 9729 - 8172
              </PinTextPhoneNumber> */}
            </PinText>
          }
          resendCountDown={true}
          autoFocus={true}
        />
        <VerifyButtonWrapper>
          <Button children="Finish" type="submit" />
        </VerifyButtonWrapper>
      </VerifyStyle>
    </>
  );
};

export default Verify;

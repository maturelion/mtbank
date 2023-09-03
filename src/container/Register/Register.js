import React, { useState } from "react";
import {
  RegisterButtonWrapper,
  RegisterForm,
  RegisterH2,
  RegisterParagraph,
  RegisterStyle,
} from "./Register.styled";
import TopBar from "../../components/TopBar/TopBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import StatusBar from "../../components/StatusBar/StatusBar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const title = ["Register", "Username", "password", "Phone"];
  return (
    <>
      <TopBar
        left={
          <svg
            onClick={() => {
              step === 1 ? navigate(-1) : setStep((step) => step - 1);
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
        center="Register"
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
      <StatusBar width={20 * step} />
      <RegisterStyle>
        <RegisterH2>{title[step - 1]}</RegisterH2>
        <RegisterParagraph>
          Create an account and enjoy the benefits we provide for you
        </RegisterParagraph>
        <RegisterForm>
          {step === 1 && (
            <Button
              children="Register with Email"
              type="button"
              onClick={() => {
                setStep((step) => step + 1);
              }}
            />
          )}
          {step === 2 && (
            <>
              <Input
                id="username"
                name="username"
                label="Email / Username"
                type="text"
                autoComplete="on"
              />
              <RegisterButtonWrapper>
                <Button
                  children="Next"
                  type="button"
                  onClick={() => {
                    setStep((step) => step + 1);
                  }}
                />
              </RegisterButtonWrapper>
            </>
          )}
          {step === 3 && (
            <>
              <Input
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="on"
              />
              <RegisterButtonWrapper>
                <Button
                  children="Next"
                  type="button"
                  onClick={() => {
                    setStep((step) => step + 1);
                  }}
                />
              </RegisterButtonWrapper>
            </>
          )}
          {step === 4 && (
            <>
              <Input
                id="phone_number"
                name="phone_number"
                label="Phone Number"
                type="tel"
                autoComplete="on"
              />
              <RegisterButtonWrapper>
                <Button
                  children="Next"
                  type="button"
                  onClick={() => {
                    navigate("/verify");
                  }}
                />
              </RegisterButtonWrapper>
            </>
          )}
        </RegisterForm>
      </RegisterStyle>
    </>
  );
};

export default Register;

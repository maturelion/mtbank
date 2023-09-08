import React, { useState } from "react";
import { ZelleActionContainer, ZelleActions, ZelleStyle } from "./Zelle.styled";
import TopBar from "../../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Send from "./Send";
import Receive from "./Receive";

const Zelle = () => {
  const navigate = useNavigate();
  const [actionType, setActionType] = useState("");
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
        center="Zelle"
        right={""}
      />
      <ZelleStyle>
        <ZelleActionContainer>
          <ZelleActions onClick={() => setActionType("send")}>
            Send
          </ZelleActions>
          <ZelleActions onClick={() => setActionType("receive")}>
            Receive
          </ZelleActions>
        </ZelleActionContainer>
        {actionType === "send" ? (
          <Send />
        ) : actionType === "receive" ? (
          <Receive />
        ) : null}
      </ZelleStyle>
      <Footer />
    </>
  );
};

export default Zelle;

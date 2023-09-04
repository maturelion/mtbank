import React, { useEffect } from "react";
import { PocketStyle } from "./Pocket.styled";
import CreditCards from "../../components/CreditCards/CreditCards";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPockets } from "../../feature/pocket/PocketActions";

const Pocket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { pockets } = useSelector((state) => state.pocket);

  useEffect(() => {
    Object.keys(user).length && dispatch(getUserPockets({ user }));
  }, [dispatch, user]);

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
        <CreditCards pockets={pockets} />
      </PocketStyle>
      <Footer />
    </>
  );
};

export default Pocket;

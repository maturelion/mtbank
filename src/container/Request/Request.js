import React from "react";
import { RequestStyle, StyledChart } from "./Request.styled";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import logo from "../../assets/green-logo.png";
import { useSelector } from "react-redux";

const Request = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

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
        center="Request"
        right={""}
      />
      <RequestStyle>
        <img src={logo} alt="" height={35} width={148} />
        {/* <StyledChart>
          <img
            src={`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${user.account_number}&choe=UTF-8`}
            alt="qr"
            height={250}
            width={250}
          />
        </StyledChart> */}
        <div>{user.first_name} {user.last_name}</div>
        <div>
          Account number: {user.account_number}{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 10.7498V14.2498C13.3333 17.1665 12.1666 18.3332 9.24996 18.3332H5.74996C2.83329 18.3332 1.66663 17.1665 1.66663 14.2498V10.7498C1.66663 7.83317 2.83329 6.6665 5.74996 6.6665H9.24996C12.1666 6.6665 13.3333 7.83317 13.3333 10.7498Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.24996 18.3333H5.74996C2.83329 18.3333 1.66663 17.1667 1.66663 14.25V10.75"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3333 5.74984V9.24984C18.3333 12.1665 17.1666 13.3332 14.25 13.3332H13.3333V10.7498C13.3333 7.83317 12.1666 6.6665 9.24996 6.6665H6.66663V5.74984C6.66663 2.83317 7.83329 1.6665 10.75 1.6665H14.25C17.1666 1.6665 18.3333 2.83317 18.3333 5.74984Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          Routing number: 022000046{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 10.7498V14.2498C13.3333 17.1665 12.1666 18.3332 9.24996 18.3332H5.74996C2.83329 18.3332 1.66663 17.1665 1.66663 14.2498V10.7498C1.66663 7.83317 2.83329 6.6665 5.74996 6.6665H9.24996C12.1666 6.6665 13.3333 7.83317 13.3333 10.7498Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.24996 18.3333H5.74996C2.83329 18.3333 1.66663 17.1667 1.66663 14.25V10.75"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3333 5.74984V9.24984C18.3333 12.1665 17.1666 13.3332 14.25 13.3332H13.3333V10.7498C13.3333 7.83317 12.1666 6.6665 9.24996 6.6665H6.66663V5.74984C6.66663 2.83317 7.83329 1.6665 10.75 1.6665H14.25C17.1666 1.6665 18.3333 2.83317 18.3333 5.74984Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </RequestStyle>
    </>
  );
};

export default Request;

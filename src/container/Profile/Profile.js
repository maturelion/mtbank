import React from "react";
import { ProfileButtonWrapper, ProfileStyle } from "./Profile.styled";
import TopBar from "../../components/TopBar/TopBar";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../feature/auth/AuthActions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const profileLinks = [
    {
      name: "Personal data",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1666 17.5H5.83329C2.49996 17.5 1.66663 16.6667 1.66663 13.3333V6.66667C1.66663 3.33333 2.49996 2.5 5.83329 2.5H14.1666C17.5 2.5 18.3333 3.33333 18.3333 6.66667V13.3333C18.3333 16.6667 17.5 17.5 14.1666 17.5Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6666 6.66699H15.8333"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 10H15.8333"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1666 13.333H15.8333"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.08328 9.40827C7.91631 9.40827 8.59162 8.73296 8.59162 7.89993C8.59162 7.0669 7.91631 6.3916 7.08328 6.3916C6.25026 6.3916 5.57495 7.0669 5.57495 7.89993C5.57495 8.73296 6.25026 9.40827 7.08328 9.40827Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99996 13.6085C9.88329 12.4001 8.92496 11.4501 7.71663 11.3418C7.29996 11.3001 6.87496 11.3001 6.44996 11.3418C5.24163 11.4585 4.28329 12.4001 4.16663 13.6085"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "/personal-data",
    },
    {
      name: "Settings",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66663 10.7329V9.26621C1.66663 8.39954 2.37496 7.68287 3.24996 7.68287C4.75829 7.68287 5.37496 6.61621 4.61663 5.30787C4.18329 4.55787 4.44163 3.58287 5.19996 3.14954L6.64163 2.32454C7.29996 1.93287 8.14996 2.16621 8.54163 2.82454L8.63329 2.98287C9.38329 4.29121 10.6166 4.29121 11.375 2.98287L11.4666 2.82454C11.8583 2.16621 12.7083 1.93287 13.3666 2.32454L14.8083 3.14954C15.5666 3.58287 15.825 4.55787 15.3916 5.30787C14.6333 6.61621 15.25 7.68287 16.7583 7.68287C17.625 7.68287 18.3416 8.39121 18.3416 9.26621V10.7329C18.3416 11.5995 17.6333 12.3162 16.7583 12.3162C15.25 12.3162 14.6333 13.3829 15.3916 14.6912C15.825 15.4495 15.5666 16.4162 14.8083 16.8495L13.3666 17.6745C12.7083 18.0662 11.8583 17.8329 11.4666 17.1745L11.375 17.0162C10.625 15.7079 9.39163 15.7079 8.63329 17.0162L8.54163 17.1745C8.14996 17.8329 7.29996 18.0662 6.64163 17.6745L5.19996 16.8495C4.44163 16.4162 4.18329 15.4412 4.61663 14.6912C5.37496 13.3829 4.75829 12.3162 3.24996 12.3162C2.37496 12.3162 1.66663 11.5995 1.66663 10.7329Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "/settings",
    },
  ];
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
        center="Profile"
        right={""}
      />
      <ProfileStyle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBlock: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBlockEnd: "32px",
            }}
          >
            <img
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
              height={50}
              width={50}
              style={{ borderRadius: "50%", marginInlineEnd: "20px" }}
            />
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBlockEnd: "5px",
                }}
              >
                {user.first_name} {user.last_name}
              </div>
              <div style={{ fontSize: "12px", color: "#606060" }}>
                silver members
              </div>
            </div>
          </div>
          {profileLinks.map((profileLink, index) => (
            <div
              key={index}
              style={{
                paddingBlock: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ECECEC",
                cursor: "pointer",
              }}
              onClick={() => navigate(profileLink.link)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {profileLink.icon}
                <span style={{ marginInlineStart: "10px" }}>
                  {profileLink.name}
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.94006 13.2797L10.2867 8.93306C10.8001 8.41973 10.8001 7.57973 10.2867 7.06639L5.94006 2.71973"
                  stroke="#B1B1B1"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.94006 13.2803L10.2867 8.93359"
                  stroke="#B1B1B1"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
        <ProfileButtonWrapper>
          <Button
            variant="danger"
            children="Log Out"
            type="submit"
            onClick={() =>
              dispatch(logoutUser({}))
                .unwrap()
                .then(() => navigate("/login"))
            }
          />
        </ProfileButtonWrapper>
      </ProfileStyle>
    </>
  );
};

export default Profile;

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
      name: "Dashboard",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "/",
    },
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
      // link: "/personal-data",
    },
    {
      name: "Contact Support",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            d="M10.75 19.2899C11.89 20.1199 13.04 20.7799 14.19 21.2699C15.34 21.7599 16.43 21.9999 17.45 21.9999C18.15 21.9999 18.8 21.8699 19.4 21.6199C20.01 21.3699 20.55 20.9799 21.04 20.4399C21.33 20.1199 21.55 19.7799 21.72 19.4199C21.89 19.0599 21.97 18.6899 21.97 18.3299C21.97 18.0499 21.91 17.7999 21.81 17.5499C21.7 17.2999 21.52 17.0899 21.26 16.9099L17.95 14.5599C17.7 14.3899 17.47 14.2599 17.25 14.1699C17.03 14.0799 16.83 14.0399 16.64 14.0399C16.39 14.0399 16.16 14.1099 15.93 14.2499C15.7 14.3699 15.46 14.5599 15.21 14.8099L14.45 15.5599C14.34 15.6699 14.21 15.7299 14.04 15.7299C13.95 15.7299 13.87 15.7199 13.79 15.6899C13.72 15.6599 13.66 15.6299 13.61 15.6099C13.27 15.4299 12.84 15.1299 12.32 14.6899C11.79 14.2399 11.27 13.7499 10.73 13.2199C10.21 12.6899 9.72999 12.1599 9.27999 11.6399C8.83999 11.1199 8.52999 10.6899 8.34999 10.3599C8.32999 10.2999 8.29999 10.2399 8.26999 10.1599C8.24999 10.0799 8.23999 10.0099 8.23999 9.92993"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      ),
      // link: "/settings",
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
      // link: "/settings",
    },
    {
      name: "Help",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9998 11.3599V11.1499C11.9998 10.4699 12.4198 10.1099 12.8398 9.81989C13.2498 9.53989 13.6598 9.1799 13.6598 8.5199C13.6598 7.5999 12.9198 6.85986 11.9998 6.85986C11.0798 6.85986 10.3398 7.5999 10.3398 8.5199"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9955 13.75H12.0045"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      // link: "/settings",
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

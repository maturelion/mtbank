import React from "react";
import { FooterContainer, FooterItem } from "./Footer.styled";

const Footer = () => {
  const footerMenu = [
    {
      name: "Home",
      link: "/",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            transform="translate(0.5)"
            fill="white"
            stroke="none"
          />
          <path
            d="M10.5698 2.81997L3.63978 8.36997C2.85978 8.98997 2.35978 10.3 2.52978 11.28L3.85978 19.24C4.09978 20.66 5.45978 21.81 6.89978 21.81H18.0998C19.5298 21.81 20.8998 20.65 21.1398 19.24L22.4698 11.28C22.6298 10.3 22.1298 8.98997 21.3598 8.36997L14.4298 2.82997C13.3598 1.96997 11.6298 1.96997 10.5698 2.81997Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 18V15"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Pocket",
      link: "/pocket",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.98 10.55C17.56 10.96 17.32 11.55 17.38 12.18C17.47 13.26 18.46 14.05 19.54 14.05H21.5V15.5C21.5 18.5 19.5 20.5 16.5 20.5H7.5C4.5 20.5 2.5 18.5 2.5 15.5V8.5C2.5 5.78 4.14 3.88 6.69 3.56C6.95 3.52 7.22 3.5 7.5 3.5H16.5C16.76 3.5 17.01 3.50999 17.25 3.54999C19.83 3.84999 21.5 5.76 21.5 8.5V9.95001H19.42C18.86 9.95001 18.35 10.17 17.98 10.55Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 9H7.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 10.9699V13.03C22.5 13.58 22.06 14.0299 21.5 14.0499H19.54C18.46 14.0499 17.47 13.2599 17.38 12.1799C17.32 11.5499 17.56 10.9599 17.98 10.5499C18.35 10.1699 18.86 9.94995 19.42 9.94995H21.5C22.06 9.96995 22.5 10.4199 22.5 10.9699Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Inbox",
      link: "/inbox",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V10"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 8C21.1569 8 22.5 6.65685 22.5 5C22.5 3.34315 21.1569 2 19.5 2C17.8431 2 16.5 3.34315 16.5 5C16.5 6.65685 17.8431 8 19.5 8Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 13H12.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 17H16.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Profile",
      link: "/profile",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.66 10.87C12.56 10.86 12.44 10.86 12.33 10.87C9.95 10.79 8.06 8.84 8.06 6.44C8.06 3.99 10.04 2 12.5 2C14.95 2 16.94 3.99 16.94 6.44C16.93 8.84 15.04 10.79 12.66 10.87Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66021 14.56C5.24021 16.18 5.24021 18.82 7.66021 20.43C10.4102 22.27 14.9202 22.27 17.6702 20.43C20.0902 18.81 20.0902 16.17 17.6702 14.56C14.9302 12.73 10.4202 12.73 7.66021 14.56Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66016 14.56C10.4202 12.73 14.9302 12.73 17.6702 14.56"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <FooterContainer>
      {footerMenu.map((data, index) => (
        <FooterItem to={data.link} key={index}>
          {data.icon}
          <div>{data.name}</div>
        </FooterItem>
      ))}
    </FooterContainer>
  );
};

export default Footer;

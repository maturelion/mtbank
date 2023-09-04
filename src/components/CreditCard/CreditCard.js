import React from "react";
import {
  CreditCardStyle,
  CardTop,
  CardBalance,
  CardCaption,
  CardName,
  CardNumber,
} from "./CreditCard.styled";
import { formatter } from "../../utils.js/currencyFormart";
import logo from "../../assets/green-logo.png";

const CreditCard = (props) => {
  const { card_name, card_number, card_caption, card_balance, bg_img } = props;
  return (
    <CreditCardStyle>
      <CardTop bg_img={bg_img}>
        <div style={{ marginBlockEnd: "auto", textAlign: "end" }}>
          <img src={logo} alt="" height={13} width={51} />
        </div>
        <CardName>{card_name}</CardName>
        <CardNumber>{card_number.slice(0, -4)}****</CardNumber>
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_65_1581)">
            <path
              d="M0.225098 3.2C0.225098 1.43269 1.72374 0 3.57242 0L20.309 0C22.1577 0 23.6563 1.43269 23.6563 3.2L23.6563 12.8C23.6563 14.5673 22.1577 16 20.309 16L3.57242 16C1.72374 16 0.225098 14.5673 0.225098 12.8L0.225098 3.2Z"
              fill="white"
              fillOpacity="0.4"
            />
            <path
              d="M0.428952 3.2C0.428952 1.55382 1.82759 0.203854 3.57242 0.203854L20.309 0.203854C22.0539 0.203854 23.4525 1.55382 23.4525 3.2L23.4525 12.8C23.4525 14.4462 22.0539 15.7961 20.309 15.7961L3.57242 15.7961C1.82759 15.7961 0.428952 14.4462 0.428952 12.8L0.428952 3.2Z"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="0.407708"
            />
          </g>
          <path
            d="M5.41318 0L5.82822 0L5.82822 15H5.41318L5.41318 10.2632H0.225098L0.225098 9.86842H5.41318L5.41318 5.13158L0.225098 5.13158L0.225098 4.73684L5.41318 4.73684L5.41318 0Z"
            fill="white"
            fillOpacity="0.4"
          />
          <path
            d="M17.242 9.86842H22.6376V10.2632H17.242L17.242 15L16.827 15L16.827 7.10526C16.827 5.79722 17.9419 4.73684 19.3172 4.73684L22.6376 4.73684V5.13158L19.3172 5.13158C18.1711 5.13158 17.242 6.01523 17.242 7.10526V9.86842Z"
            fill="white"
            fillOpacity="0.4"
          />
          <path
            d="M17.242 0L16.827 0V3.15789H17.242V0Z"
            fill="white"
            fillOpacity="0.4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3367 7.5C14.3367 9.02605 13.0359 10.2632 11.4313 10.2632C9.82678 10.2632 8.52602 9.02605 8.52602 7.5C8.52602 5.97395 9.82678 4.73684 11.4313 4.73684C13.0359 4.73684 14.3367 5.97395 14.3367 7.5ZM13.9216 7.5C13.9216 8.80804 12.8067 9.86842 11.4313 9.86842C10.056 9.86842 8.94107 8.80804 8.94107 7.5C8.94107 6.19196 10.056 5.13158 11.4313 5.13158C12.8067 5.13158 13.9216 6.19196 13.9216 7.5Z"
            fill="white"
            fillOpacity="0.4"
          />
          <defs>
            <filter
              id="filter0_b_65_1581"
              x="-4.87126"
              y="-5.09636"
              width="33.6239"
              height="26.1927"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.54818" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_65_1581"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_65_1581"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </CardTop>
      <div style={{ paddingInline: "10px" }}>
        <CardCaption>{card_caption}</CardCaption>
        <CardBalance>{formatter.format(card_balance)}</CardBalance>
      </div>
    </CreditCardStyle>
  );
};

export default CreditCard;

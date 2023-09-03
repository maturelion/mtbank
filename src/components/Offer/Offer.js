import React from "react";
import { OferHeading, OferParagraph, OfferStyle } from "./Offer.styled";

const Offer = () => {
  return (
    <OfferStyle onClick={() => alert("")}>
      <div style={{ position: "absolute", top: 26, left: 26 }}>
        <OferHeading>Let's connect</OferHeading>
        <OferParagraph>
          Connect account with marketplace for automatic payment and get $25
          bonus
        </OferParagraph>
      </div>
      <>
        <svg
          style={{ position: "absolute", bottom: 0, right: 0 }}
          width="74"
          height="78"
          viewBox="0 0 74 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.7405 2.65685C67.8647 -0.467344 72.93 -0.46734 76.0542 2.65685L100.707 27.31C103.832 30.4342 103.832 35.4995 100.707 38.6237L38.6237 100.707C35.4995 103.831 30.4342 103.831 27.31 100.707L2.65687 76.0542C-0.467321 72.93 -0.467327 67.8647 2.65687 64.7405L64.7405 2.65685Z"
            fill="url(#paint0_linear_141_4579)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_141_4579"
              x1="88.3808"
              y1="14.9834"
              x2="14.9834"
              y2="88.3807"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C5B1FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          style={{ position: "absolute", bottom: 0, left: 0 }}
          width="74"
          height="23"
          viewBox="0 0 74 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.2966 2.65685C36.1724 -0.467344 31.1071 -0.46734 27.9829 2.65685L-4.34311 34.9829C-7.4673 38.1071 -7.46729 43.1724 -4.3431 46.2966L27.9829 78.6226C31.1071 81.7468 36.1724 81.7468 39.2966 78.6226L71.6226 46.2966C74.7468 43.1724 74.7468 38.1071 71.6226 34.9829L39.2966 2.65685Z"
            fill="url(#paint0_linear_141_4577)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_141_4577"
              x1="11.8199"
              y1="18.8199"
              x2="42.5001"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B196FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          style={{ position: "absolute", top: 0, left: 0 }}
          width="80"
          height="59"
          viewBox="0 0 80 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2034 -46.3431C23.3276 -49.4673 28.3929 -49.4673 31.5171 -46.3431L77.0637 -0.796578C80.1878 2.32762 80.1878 7.39294 77.0637 10.5171L31.5171 56.0637C28.3929 59.1879 23.3276 59.1879 20.2034 56.0637L-25.3432 10.5171C-28.4674 7.39293 -28.4674 2.32762 -25.3432 -0.796578L20.2034 -46.3431Z"
            fill="url(#paint0_linear_141_4578)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_141_4578"
              x1="54.2904"
              y1="-23.5699"
              x2="-2.56991"
              y2="33.2904"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C5B1FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          style={{ position: "absolute", bottom: 10, right: 10 }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12H11"
            stroke="#2D2D2D"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    </OfferStyle>
  );
};

export default Offer;

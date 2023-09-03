import React, { useState } from "react";
import {
  Balance,
  BalanceEyeContainer,
  MyBalanceStyle,
  MyBalanceText,
} from "./MyBalance.styled";
import { formatter } from "../../utils.js/currencyFormart";

const MyBalance = (props) => {
  const { balance } = props;
  const [showBalance, setShowBalance] = useState(true);

  return (
    <MyBalanceStyle>
      <MyBalanceText>Your Balance </MyBalanceText>
      <BalanceEyeContainer>
        <Balance>
          {showBalance ? (
            formatter.format(balance)
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
              <text x="0" y="60" fontSize="60" fill="black">
                *
              </text>
              <text x="20" y="60" fontSize="60" fill="black">
                *
              </text>
              <text x="40" y="60" fontSize="60" fill="black">
                *
              </text>
              <text x="60" y="60" fontSize="60" fill="black">
                *
              </text>
              <text x="80" y="60" fontSize="60" fill="black">
                *
              </text>
            </svg>
          )}
        </Balance>
        <div
          onClick={() => setShowBalance(!showBalance)}
          style={{ WebkitTapHighlightColor: "transparent", cursor: "pointer" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9834 9.99993C12.9834 11.6499 11.6501 12.9833 10.0001 12.9833C8.35006 12.9833 7.01672 11.6499 7.01672 9.99993C7.01672 8.34993 8.35006 7.0166 10.0001 7.0166C11.6501 7.0166 12.9834 8.34993 12.9834 9.99993Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99987 16.8916C12.9415 16.8916 15.6832 15.1583 17.5915 12.1583C18.3415 10.9833 18.3415 9.00831 17.5915 7.83331C15.6832 4.83331 12.9415 3.09998 9.99987 3.09998C7.0582 3.09998 4.31654 4.83331 2.4082 7.83331C1.6582 9.00831 1.6582 10.9833 2.4082 12.1583C4.31654 15.1583 7.0582 16.8916 9.99987 16.8916Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </BalanceEyeContainer>
    </MyBalanceStyle>
  );
};

export default MyBalance;

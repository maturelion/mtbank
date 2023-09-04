import React, { useEffect } from "react";
import { HistoryStyle, TransactionCard } from "./History.styled";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistories } from "../../feature/history/historyActions";
import { formatter } from "../../utils.js/currencyFormart";

const History = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { histories } = useSelector((state) => state.history);
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

  useEffect(() => {
    Object.keys(user).length && dispatch(getUserHistories({ user }));
  }, [dispatch, user]);

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
        center="History"
        right={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 9.08984H20.5"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 13.7002H15.7037"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 16.7002H15.7037"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 13.7002H12.0045"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 16.7002H12.0045"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 13.7002H8.30329"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 16.7002H8.30329"
              stroke="#2D2D2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <HistoryStyle>
        <h4>Transaction</h4>
        {histories.map((history, index) => (
          <TransactionCard key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {history.tx_type === "Debit" ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
                    fill="#05BE71"
                    fill-opacity="0.05"
                  />
                  <path
                    d="M17.5 21.7502C17.5 22.7202 18.25 23.5002 19.17 23.5002H21.05C21.85 23.5002 22.5 22.8202 22.5 21.9702C22.5 21.0602 22.1 20.7302 21.51 20.5202L18.5 19.4702C17.91 19.2602 17.51 18.9402 17.51 18.0202C17.51 17.1802 18.16 16.4902 18.96 16.4902H20.84C21.76 16.4902 22.51 17.2702 22.51 18.2402"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 15.5V24.5"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 20C30 25.52 25.52 30 20 30C14.48 30 10 25.52 10 20C10 14.48 14.48 10 20 10"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 14V10H26"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 15L30 10"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
                    fill="#05BE71"
                    fill-opacity="0.05"
                  />
                  <path
                    d="M17.5 21.7502C17.5 22.7202 18.25 23.5002 19.17 23.5002H21.05C21.85 23.5002 22.5 22.8202 22.5 21.9702C22.5 21.0602 22.1 20.7302 21.51 20.5202L18.5 19.4702C17.91 19.2602 17.51 18.9402 17.51 18.0202C17.51 17.1802 18.16 16.4902 18.96 16.4902H20.84C21.76 16.4902 22.51 17.2702 22.51 18.2402"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 15.5V24.5"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 20C30 25.52 25.52 30 20 30C14.48 30 10 25.52 10 20C10 14.48 14.48 10 20 10"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 11V15H29"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 10L25 15"
                    stroke="#05BE71"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              <div style={{ marginInlineStart: "12px" }}>
                <div>{history.description}</div>
                <div>{history.tx_type === "Debit" ? "Out" : "In"} - {monthNames[new Date(history.date).getUTCMonth()]} {new Date(history.date).getDate()}</div>
              </div>
            </div>
            <div>{history.tx_type === "Debit" ? "-" : "+"}{formatter.format(history.amount)}</div>
          </TransactionCard>
        ))}
      </HistoryStyle>
    </>
  );
};

export default History;

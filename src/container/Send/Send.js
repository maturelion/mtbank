import React, { useEffect, useState } from "react";
import { SendStyle } from "./Send.styled";
import TopBar from "../../components/TopBar/TopBar";
import Success from "../../container/Success/Success";
import { useDispatch, useSelector } from "react-redux";
import { getUserBalance } from "../../feature/wallet/WalletActions";
import { useNavigate } from "react-router-dom";
import Ach from "./Ach";
import { useFormik } from "formik";
import * as Yup from "yup";
import Billpay from "./Billpay";
import Check from "./Check";

const Send = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isSent, setIsSent] = useState(false);
  const [sendOption, setsendOption] = useState("");

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    Object.keys(user).length && dispatch(getUserBalance({ user }));
  }, [dispatch, user]);

  const achFormik = useFormik({
    initialValues: {
      bank_name: "",
      account_number: "",
      routing_number: "",
      amount: 0,
    },
    validationSchema: Yup.object({
      bank_name: Yup.string()
        .required("Bank name is required")
        .max(50, "Bank name must be 50 characters"),
      account_number: Yup.string()
        .required("Account number is required")
        .max(9, "Account number must be 9 digit")
        .min(9, "Account number must be 9 digit"),
      routing_number: Yup.string()
        .required("Routing number is required")
        .max(9, "Account number must be 9 digit")
        .min(9, "Account number must be 9 digit"),
      amount: Yup.string()
        .required("Amount is required")
        .max(9, "max digit is 9"),
    }),
    onSubmit: (values) => {
      if (step < 2) {
        setStep((step) => step + 1);
      } else {
        setIsSent(true);
      }
    },
  });

  const bill_payFormik = useFormik({
    initialValues: {
      account_number: "",
      address: "",
      amount: "",
    },
    validationSchema: Yup.object({
      account_number: Yup.string()
        .required("Account number is required")
        .max(9, "Account number must be 9 digit")
        .min(9, "Account number must be 9 digit"),
      address: Yup.string().required("Address number is required"),
      amount: Yup.string()
        .required("Amount is required")
        .max(9, "max digit is 9"),
    }),
    onSubmit: (values) => {
      setIsSent(true);
    },
  });

  const checkFormik = useFormik({
    initialValues: {
      account_number: "",
      routing_number: "",
      amount: "",
    },
    validationSchema: Yup.object({
      account_number: Yup.string()
        .required("Account number is required")
        .max(9, "Account number must be 9 digit")
        .min(9, "Account number must be 9 digit"),
      routing_number: Yup.string().required(
        "Routing number number is required"
      ),
      amount: Yup.string()
        .required("Amount is required")
        .max(9, "max digit is 9"),
    }),
    onSubmit: (values) => {
      setIsSent(true);
    },
  });

  const sendOptions = [
    {
      name: "ACH",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.5V16.5"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6V2H18"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7L22 2"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      option: "ach",
    },
    {
      name: "Bill pay",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6V18"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      option: "bill_pay",
    },
    {
      name: "Check",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2899 9.17005L7.6999 3.07005C4.9499 1.62005 1.9599 4.55005 3.3499 7.33005L4.9699 10.57C5.4199 11.47 5.4199 12.53 4.9699 13.43L3.3499 16.67C1.9599 19.45 4.9499 22.37 7.6999 20.93L19.2899 14.83C21.5699 13.63 21.5699 10.37 19.2899 9.17005Z"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.97015 13.4299L3.35015 16.6699C1.96015 19.4499 4.95015 22.3699 7.70015 20.9299"
            stroke="#05BE71"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      option: "check",
    },
  ];

  return (
    <>
      {isSent ? (
        <Success
          amount={
            achFormik.values.amount |
            bill_payFormik.values.amount |
            checkFormik.values.amount
          }
        />
      ) : (
        <>
          <TopBar
            left={
              <svg
                onClick={() => {
                  if (sendOption === "" && step === 1) {
                    navigate(-1);
                  } else if (sendOption === "ach" && step === 1) {
                    setsendOption("");
                  } else if (sendOption === "bill_pay" && step === 1) {
                    setsendOption("");
                  } else if (sendOption === "check" && step === 1) {
                    setsendOption("");
                  } else {
                    setStep((step) => step - 1);
                  }
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
            center="Send Fund"
            right={""}
          />
          <SendStyle>
            {sendOption === "" ? (
              sendOptions.map((option, index) => (
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
                  onClick={() => {
                    setsendOption(option.option);
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {option.icon}
                    <span style={{ marginInlineStart: "10px" }}>
                      {option.name}
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
              ))
            ) : sendOption === "ach" ? (
              <Ach
                setIsSent={setIsSent}
                formik={achFormik}
                step={step}
                setStep={setStep}
              />
            ) : sendOption === "bill_pay" ? (
              <Billpay formik={bill_payFormik} />
            ) : (
              sendOption === "check" && <Check formik={checkFormik} />
            )}
          </SendStyle>
        </>
      )}
    </>
  );
};

export default Send;

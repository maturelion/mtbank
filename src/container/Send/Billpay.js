import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import FormError from "../../components/FormError/FormError";
import { SendButtonWrapper, SendForm } from "./Send.styled";
import { useSelector } from "react-redux";
import { formatter } from "../../utils.js/currencyFormart";

const Billpay = (props) => {
  const { formik } = props;
  const { balance, loadingBalance } = useSelector((state) => state.wallet);
  return (
    <SendForm
      onSubmit={formik.handleSubmit}
      style={{ marginBlockStart: "1px" }}
    >
      <div style={{ textAlign: "center", marginBlock: "5px" }}>
        Bill Payment
      </div>
      <div
        style={{
          border: "1px solid #05BE71",
          borderRadius: "8px",
          padding: "16px 12px",
          marginBlockEnd: "40px",
        }}
      >
        <div>Main wallet</div>
        <h2 style={{ lineHeight: 0 }}>
          {!loadingBalance && formatter.format(balance.balance)}
        </h2>
      </div>
      <Input
        id="account_number"
        name="account_number"
        label="Account number"
        type="text"
        value={formik.values.account_number}
        {...formik.getFieldProps("account_number")}
        pattern="[0-9]*"
        inputMode="numeric"
      />
      {formik.touched.account_number && formik.errors.account_number ? (
        <FormError>{formik.errors.account_number}</FormError>
      ) : null}
      <Input
        id="address"
        name="address"
        label="Address"
        type="text"
        value={formik.values.address}
        {...formik.getFieldProps("address")}
      />
      {formik.touched.address && formik.errors.address ? (
        <FormError>{formik.errors.address}</FormError>
      ) : null}
      <div>Total transfer:</div>
      <Input
        id="amount"
        name="amount"
        label="Amount"
        type="text"
        value={formik.values.amount}
        {...formik.getFieldProps("amount")}
        pattern="[0-9]*"
        inputMode="numeric"
      />
      {formik.touched.amount && formik.errors.amount ? (
        <FormError>{formik.errors.amount}</FormError>
      ) : null}
      <SendButtonWrapper>
        <div
          style={{
            backgroundColor: "#05BE7150",
            height: "98px",
            display: "flex",
            alignItems: "center",
            paddingInline: "33px",
            position: "relative",
          }}
        >
          <svg
            style={{ position: "absolute", left: 0 }}
            width="140"
            height="98"
            viewBox="0 0 140 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120.5 99.9999C168.837 31.3935 113.998 -49 64.0002 -49L-126 -49C-124.658 -14.8688 -83.5 10 -126 57.9998C-168.5 106 0.500006 -22.0001 0.500005 2.99987L0.500001 99.9999C0.500001 103.5 89.5 144 120.5 99.9999Z"
              fill="#05BE71"
              fillOpacity="0.1"
            />
          </svg>

          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.2254 5.57515L13.7504 10.2751C10.8754 11.3501 8.52539 14.7501 8.52539 17.8001V36.3751C8.52539 39.3251 10.4754 43.2001 12.8504 44.9751L23.6004 53.0001C27.1254 55.6501 32.9254 55.6501 36.4504 53.0001L47.2004 44.9751C49.5754 43.2001 51.5254 39.3251 51.5254 36.3751V17.8001C51.5254 14.7251 49.1754 11.3251 46.3004 10.2501L33.8254 5.57515C31.7004 4.80015 28.3004 4.80015 26.2254 5.57515Z"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.6245 29.6752L26.6495 33.7002L37.3995 22.9502"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ marginInlineStart: "12px" }}>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>
              Secure Payment
            </div>
            <p style={{ fontSize: "10px" }}>
              We make sure your payment is safe and secure
            </p>
          </div>
        </div>
        <Button children="Pay" type="submit" />
      </SendButtonWrapper>
    </SendForm>
  );
};

export default Billpay;

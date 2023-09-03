import React, { useEffect, useRef, useState } from "react";
import { PinInputBox, PinInputBoxWrapper, PinStyle } from "./Pin.styled";

const Pin = (props) => {
  const { icon, text, resendCountDown, autoFocus } = props;
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleKeyUp = (index, event) => {
      if (event.key === "Backspace" && index > 0) {
        inputRefs[index - 1].current.focus();
      } else if (event.key.match(/[0-9]/) && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    };

    inputRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.addEventListener("keyup", (e) => handleKeyUp(index, e));
      }
    });

    return () => {
      inputRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener("keyup", handleKeyUp);
        }
      });
    };
  }, [inputRefs]);

  const handleChange = (index, newValue) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;
    setInputValues(newInputValues);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData("text/plain");
    const newInputValues = pastedValue.slice(0, 4).padEnd(4, " ").split("");
    setInputValues(newInputValues);
  };

  const isFilled = inputValues.every((value) => value !== "");

  return (
    <PinStyle>
      <div>{icon}</div>
      <div>{text}</div>
      <PinInputBoxWrapper style={{ height: "40px", marginBlock: "30px" }}>
        {inputRefs.map((value, index) => (
          <PinInputBox
            isFilled={isFilled}
            autoFocus={index === 0 && autoFocus}
            name={`pin${index}`}
            id={`pin${index}`}
            key={index}
            ref={inputRefs[index]}
            type="password"
            maxLength="1"
            value={inputValues[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={index === 0 ? handlePaste : null}
            pattern="[0-9]*" // Allow only numeric digits
            inputMode="numeric" // Show numeric keyboard on mobile devices
          />
        ))}
      </PinInputBoxWrapper>
      {resendCountDown && (
        <div>
          <div style={{ marginBlock: "20px" }}>Resend 0:00</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.734 16.06C18.888 17.7705 17.5158 19.1648 15.819 20.038C14.1344 20.903 12.2136 21.1951 10.348 20.87C8.47659 20.541 6.76206 19.6148 5.461 18.23C4.14787 16.8322 3.31181 15.0539 3.073 13.151C2.83045 11.2437 3.19579 9.30856 4.117 7.621C5.02975 5.94636 6.45609 4.60906 8.186 3.806C9.90431 3.01016 11.8354 2.7967 13.686 3.198C15.536 3.599 17.052 4.511 18.306 5.953C18.457 6.113 19.041 6.759 19.526 7.734"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.069 7.813L20.109 8.72L21 3.59"
              stroke="#05BE71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </PinStyle>
  );
};

export default Pin;

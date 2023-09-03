import React from "react";
import { FloatingLabel, InputLabel, InputStyle } from "./Input.styled";

const Input = (props) => {
  const { variant = "primary", label, ...rest } = props;
  return (
    <InputLabel variant={variant}>
      <InputStyle {...rest}  placeholder="" />
      <FloatingLabel>{label}</FloatingLabel>
    </InputLabel>
  );
};

export default Input;

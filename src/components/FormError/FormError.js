import React from "react";
import { FormErrorStyle } from "./FormError.styled";

const FormError = (props) => {
  const { children } = props;
  return <FormErrorStyle>{children}</FormErrorStyle>;
};

export default FormError;

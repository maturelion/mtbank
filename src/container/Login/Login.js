import React, { useEffect } from "react";
import {
  LoginForm,
  LoginH2,
  LoginLink,
  LoginParagraph,
  LoginStyle,
} from "./Login.styled";
import TopBar from "../../components/TopBar/TopBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/green-logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../feature/auth/AuthActions";
import FormError from "../../components/FormError/FormError";
import { clearMessage } from "../../feature/message/messageSlice";
import { clearInputError } from "../../feature/inputError/inputErrorSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { inputError } = useSelector((state) => state.inputError);
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearMessage());
    dispatch(clearInputError());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: { bank_name: "", account_number: "", amount: 0 },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        loginUser({ username: values.username, password: values.password })
      )
        .unwrap()
        .then(() => navigate("/checkpoint"));
    },
  });

  return (
    <>
      <TopBar left={<img src={logo} alt="" height={30} width={100} />} />
      <LoginStyle>
        <LoginH2>Welcome</LoginH2>
        <LoginParagraph>
          Enjoy all the features that make it easy for you to manage your
          finances
        </LoginParagraph>
        <FormError>
          {inputError !== undefined
            ? inputError.non_field_errors
              ? inputError.non_field_errors
              : null
            : null}
        </FormError>
        <LoginForm onSubmit={formik.handleSubmit}>
          <Input
            id="username"
            name="username"
            label="UserID"
            type="text"
            autoComplete="on"
            value={formik.values.username}
            {...formik.getFieldProps("username")}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="on"
            value={formik.values.password}
            {...formik.getFieldProps("password")}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Remember me</div>
            <div>Forgot password ?</div>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <ReactLoading
                type={"spinningBubbles"}
                height={"20px"}
                width={"20px"}
              />
            ) : (
              "Login"
            )}
          </Button>
        </LoginForm>
        <LoginLink>
          Don't have an account? <Link to="/register">Register</Link>
        </LoginLink>
      </LoginStyle>
    </>
  );
};

export default Login;

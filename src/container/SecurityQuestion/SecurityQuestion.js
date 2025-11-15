import React, { useEffect, useState } from "react";
import { SecurityForm, SecurityQuestionStyle } from "./SecurityQuestion.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ReactLoading from "react-loading";
import {
  checkpoint,
  getCheckpointQ,
} from "../../feature/security/CheckpointActions";
import FormError from "../../components/FormError/FormError";
import { getUser } from "../../feature/user/UserActions";

const SecurityQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [incorrectAnswer, setIncorrectAnswer] = useState("");

  const { isAuthenticated, loadingCheckpoint, checkpointQ } = useSelector(
    (state) => state.checkpoint
  );
  const { user } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: { security_answer: "" },
    validationSchema: Yup.object({
      security_answer: Yup.string().required("Security answer is required"),
    }),
    onSubmit: (values) => {
      dispatch(checkpoint({ user: user, answer: values.security_answer }))
        .unwrap()
        .then()
        .catch((e) => {
          console.log(e);
          setIncorrectAnswer(isAuthenticated === false && "Incorrect answer");
        });
    },
  });

  useEffect(() => {
    dispatch(getUser({}))
      .unwrap()
      .then()
      .catch(() => navigate("/login"));
  }, [dispatch, navigate]);

  useEffect(() => {
    dispatch(getCheckpointQ({ user }));
  }, [dispatch, user]);

  return (
    <SecurityQuestionStyle>
      <SecurityForm onSubmit={formik.handleSubmit}>
        <div>{checkpointQ && checkpointQ.question}:</div>
        <Input
          id="security_answer"
          name="security_answer"
          label="Security Answer"
          type="text"
          autoComplete="on"
          value={formik.values.security_answer}
          {...formik.getFieldProps("security_answer")}
        />
        <FormError>{incorrectAnswer}</FormError>
        <Button disabled={loadingCheckpoint}>
          {loadingCheckpoint ? (
            <ReactLoading
              type={"spinningBubbles"}
              height={"20px"}
              width={"20px"}
            />
          ) : (
            "Submit"
          )}
        </Button>
      </SecurityForm>
    </SecurityQuestionStyle>
  );
};

export default SecurityQuestion;

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

  const { loadingCheckpoint, checkpointQ } = useSelector(
    (state) => state.checkpoint
  );
  const { user } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: { security_answer: "" },
    validationSchema: Yup.object({
      security_answer: Yup.string().required("Security answer is required"),
    }),
    onSubmit: async (values) => {
      setIncorrectAnswer("");

      try {
        const res = await dispatch(
          checkpoint({ user, answer: values.security_answer })
        ).unwrap();

        if (!res || res.correct === false || res.success === false || res === false) {
          setIncorrectAnswer("Incorrect answer");
          return;
        }

        // success → you can navigate if needed
        // navigate("/dashboard");
      } catch (e) {
        setIncorrectAnswer("Incorrect answer");
      }
    },
  });

  // Clear error message when user starts typing again
  useEffect(() => {
    if (incorrectAnswer) setIncorrectAnswer("");
  }, [formik.values.security_answer, incorrectAnswer]);

  // Fetch user, redirect if fails
  useEffect(() => {
    dispatch(getUser({}))
      .unwrap()
      .catch(() => navigate("/login"));
  }, [dispatch, navigate]);

  // Fetch security question once user is loaded
  useEffect(() => {
    if (user) dispatch(getCheckpointQ({ user }));
  }, [dispatch, user]);

  // Don't render form until user data is ready
  if (!user) return null;

  return (
    <SecurityQuestionStyle>
      <SecurityForm onSubmit={formik.handleSubmit}>
        <div>{checkpointQ?.question}:</div>

        <Input
          id="security_answer"
          name="security_answer"
          label="Security Answer"
          type="text"
          autoComplete="on"
          {...formik.getFieldProps("security_answer")}
        />

        <FormError>{incorrectAnswer}</FormError>

        <Button disabled={loadingCheckpoint}>
          {loadingCheckpoint ? (
            <ReactLoading type="spinningBubbles" height="20px" width="20px" />
          ) : (
            "Submit"
          )}
        </Button>
      </SecurityForm>
    </SecurityQuestionStyle>
  );
};

export default SecurityQuestion;

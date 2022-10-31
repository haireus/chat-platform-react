import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import { postLoginUser } from "../../utils/api";
import { UserCredentialsParams } from "../../utils/types";
import styles from "./index.module.scss";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentialsParams>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: UserCredentialsParams) => {
    try {
      await postLoginUser(data);
      navigate("/conversations");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <InputField
            type={"email"}
            autoComplete="off"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
        </InputContainer>

        <InputContainer className={styles.loginForm}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type={"password"}
            autoComplete="off"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
        </InputContainer>

        <Button className={styles.button}>Login</Button>

        <div className={styles.loginUser}>
          <span>Don't have an account ? </span>
          <a href="/register" className={styles.login}>
            Register
          </a>
        </div>
      </form>
    </Wrapper>
  );
};

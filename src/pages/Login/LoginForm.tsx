import React from "react";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import styles from "./index.module.scss";

export const LoginForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type={"email"} autoComplete="off" id="email" />
      </InputContainer>

      <InputContainer className={styles.loginForm}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type={"password"} autoComplete="off" id="password" />
      </InputContainer>

      <Button className={styles.button}>Login</Button>

      <div className={styles.loginUser}>
        <span>Don't have an account ? </span>
        <a href="/register" className={styles.login}>
          Register
        </a>
      </div>
    </form>
  );
};

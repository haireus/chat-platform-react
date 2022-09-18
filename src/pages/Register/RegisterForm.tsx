import React from "react";
import { Link } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import styles from "./index.module.scss";
export const RegisterForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type={"email"} id="email" />
      </InputContainer>

      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField type={"text"} id="firstName" />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField type={"text"} id="lastName" />
        </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type={"password"} id="password" />
      </InputContainer>

      <Button className={styles.button}>Create My Account</Button>

      <div className={styles.loginUser}>
        <span>Already have an account ? </span>
        <a href="/login" className={styles.login}>
          Login
        </a>
      </div>
    </form>
  );
};

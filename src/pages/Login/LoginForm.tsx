import React from "react";
import { useForm } from "react-hook-form";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import styles from "./index.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
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
  );
};

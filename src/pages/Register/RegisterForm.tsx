import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, InputContainer, InputField, InputLabel } from "../../styles";
import { postRegisterUser } from "../../utils/api";
import { CreateUserParams } from "../../utils/types";
import styles from "./index.module.scss";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserParams>();

  const onSubmit = async (data: CreateUserParams) => {
    try {
      await postRegisterUser(data);
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
            id="email"
            autoComplete={"off"}
            {...register("email", { required: "Email is required" })}
          />
        </InputContainer>

        <section className={styles.nameFieldRow}>
          <InputContainer>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <InputField
              type={"text"}
              id="firstName"
              autoComplete={"off"}
              {...register("firstName", { required: "First name is required" })}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField
              type={"text"}
              autoComplete={"off"}
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
            />
          </InputContainer>
        </section>

        <InputContainer>
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type={"password"}
            autoComplete={"off"}
            id="password"
            {...register("password", { required: "Password is required" })}
          />
        </InputContainer>

        <Button className={styles.button} type="submit">
          Create My Account
        </Button>

        <div className={styles.loginUser}>
          <span>Already have an account ? </span>
          <a href="/login" className={styles.login}>
            Login
          </a>
        </div>
      </form>
    </Wrapper>
  );
};

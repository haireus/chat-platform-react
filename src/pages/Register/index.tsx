import SignInBanner from "../../components/SignInBanner";
import { SignInPage } from "../../styles";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
  return (
    <SignInPage>
      <SignInBanner />
      <RegisterForm />
    </SignInPage>
  );
}

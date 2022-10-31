import SignInBanner from "../../components/SignInBanner";
import { SignInPage } from "../../styles";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <SignInPage>
      <SignInBanner />
      <LoginForm />
    </SignInPage>
  );
}

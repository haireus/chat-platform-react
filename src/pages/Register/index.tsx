import SignInBanner from "../../components/SignInBanner";
import { Page, SignInPage } from "../../styles";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
  return (
    // <Page display="flex" justifyContent="center" alignItems="center">
    //   {/* <RegisterForm /> */}
    // </Page>

    <SignInPage>
      <SignInBanner />
      <div></div>
    </SignInPage>
  );
}

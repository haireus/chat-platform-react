import styled from "styled-components";
import BannerImg from "../../assets/svg/welcome.svg";
import styles from "./index.module.scss";

const Wrapper = styled.div`
  background-color: #18345e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H6 = styled.h6`
  color: white;
  font-size: 24px;
  margin: 15px;
  text-transform: capitalize;
`;

const SubTitle = styled.div`
  color: white;
  font-size: 13px;
`;

const Image = styled.img``;

export default function SignInBanner() {
  return (
    <Wrapper>
      <Image src={BannerImg} />
      <H6>Welcome Back</H6>
      <SubTitle>Let's start and chat together</SubTitle>

      <div className={styles.ldsHeart}>
        <div></div>
      </div>
    </Wrapper>
  );
}

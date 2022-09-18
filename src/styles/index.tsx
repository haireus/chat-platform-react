import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const InputField = styled.input`
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #2b09ff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: bold;
  transform: 250ms background-color ease;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #482df6;
  }

  &:active {
    background-color: #2b0deb;
  }
`;

export const Page = styled.div<PageProps>`
  height: 100vh;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const ConversationSideBarStyle = styled.aside`
  background-color: #1f1f1f;
  height: 100vh;
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ConversationItemStyle = styled.div`
  height: 100vh;
  margin-left: 350px;
`;

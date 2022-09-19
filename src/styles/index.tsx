import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;

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
  background-color: #1a1a1a;
  height: 100vh;
  width: ${SIDEBAR_WIDTH}px;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid #545454;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2d2d2d;
  }

  & > header {
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    height: 60px;
    border-bottom: 1px solid #545454;
    position: sticky;
    top: 0;
    left: 0;
    h1 {
      font-weight: normal;
    }
  }
`;

export const ConversationItemStyle = styled.div`
  height: 100vh;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSideBarContainer = styled.div``;

export const ConversationSideBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  padding: 5px 18px;
  margin-top: 10px;
  background-color: #1a1a1a !important;
  border-bottom: 1px solid #545454;
  cursor: pointer;
`;

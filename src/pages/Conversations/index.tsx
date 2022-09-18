import { Outlet } from "react-router-dom";
import { Page } from "../../styles";
import { ConversationSideBar } from "./ConversationSidebar";
import styles from "./index.styles.module.scss";

export default function Conversations() {
  return (
    <Page>
      <ConversationSideBar />
      <Outlet />
    </Page>
  );
}

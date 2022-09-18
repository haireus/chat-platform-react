import { Outlet, useParams } from "react-router-dom";
import { Page } from "../../styles";
import ConversationItem from "../ConversationItem";
import { ConversationSideBar } from "./ConversationSidebar";
import styles from "./index.styles.module.scss";

export default function Conversations() {
  const { id } = useParams();

  return (
    <Page>
      <ConversationSideBar />

      {!id && <ConversationItem />}
      <Outlet />
    </Page>
  );
}

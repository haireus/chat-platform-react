import {
  ConversationSideBarContainer,
  ConversationSideBarItem,
  ConversationSideBarStyle,
} from "../../styles";
import { TbEdit } from "react-icons/tb";
import conversations from "../../__mocks__/conversations";
import { ConversationType } from "../../utils/types";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  conversations: ConversationType[];
}
export const ConversationSideBar = ({ conversations }: IProps) => {
  const navigate = useNavigate();

  return (
    <ConversationSideBarStyle>
      <header>
        <h1>Conversations</h1>
        <TbEdit size={30} cursor="pointer" />
      </header>

      <ConversationSideBarContainer>
        {conversations.map((el) => (
          <ConversationSideBarItem
            onClick={() =>
              navigate(`/conversations/${el?.id}`, { replace: true })
            }
          >
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{el?.name}</span>
              <span className={styles.conversationMessage}>
                {el?.lastMessage}
              </span>
            </div>
          </ConversationSideBarItem>
        ))}
      </ConversationSideBarContainer>
    </ConversationSideBarStyle>
  );
};

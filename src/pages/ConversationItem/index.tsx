import { useParams } from "react-router-dom";
import { ConversationItemStyle } from "../../styles";

export default function ConversationItem() {
  const params = useParams();

  console.log(params);

  return <ConversationItemStyle>Item channel</ConversationItemStyle>;
}

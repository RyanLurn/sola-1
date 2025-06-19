import { useLiveQuery } from "dexie-react-hooks";
import GroupLoader from "@/components/app-sidebar/utils/group-loader";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { db } from "@/database/connection";
import ChatGroupAction from "@/features/chat/components/sidebar/group-action";
import ChatItem from "@/features/chat/components/sidebar/item";

function ChatGroup() {
  const chats = useLiveQuery(() =>
    db.chats.orderBy("lastOpenedAt").reverse().toArray(),
  );

  if (!chats) return <GroupLoader items={5} />;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chats</SidebarGroupLabel>
      <ChatGroupAction />
      <SidebarGroupContent>
        <SidebarMenu>
          {chats.map((chat) => (
            <ChatItem key={chat.id} chatId={chat.id} title={chat.title} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default ChatGroup;

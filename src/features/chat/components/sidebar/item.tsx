import { Link, useParams } from "@tanstack/react-router";
import { Loader2, MessageSquare } from "lucide-react";
import { memo } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const ChatItem = memo(function ChatItem({
  chatId,
  title,
}: {
  chatId: string;
  title: string;
}) {
  const { chatId: activeChatId } = useParams({ strict: false });
  const isNewChat = title === "New chat";

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={chatId === activeChatId}
        disabled={isNewChat}
      >
        <Link
          to="/chat/$chatId"
          params={{
            chatId,
          }}
        >
          {isNewChat ? <Loader2 className="animate-spin" /> : <MessageSquare />}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
});

export default ChatItem;

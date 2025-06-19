import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { memo } from "react";
import { SidebarGroupAction } from "@/components/ui/sidebar";

const ChatGroupAction = memo(function ChatGroupAction() {
  return (
    <SidebarGroupAction title="New chat" asChild>
      <Link to="/chat">
        <Plus />
      </Link>
    </SidebarGroupAction>
  );
});

export default ChatGroupAction;

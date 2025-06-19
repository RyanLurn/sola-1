import AppSidebarHeader from "@/components/app-sidebar/header";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import ChatGroup from "@/features/chat/components/sidebar/group";

function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent>
        <ChatGroup />
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;

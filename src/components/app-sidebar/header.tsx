import { PanelLeftClose, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";

function AppSidebarHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarHeader>
      <div className="ml-2 flex items-center gap-x-2">
        <Sun className="size-5" />
        <span>Sola 1</span>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto cursor-pointer"
          onClick={toggleSidebar}
        >
          <PanelLeftClose className="size-5" />
        </Button>
      </div>
    </SidebarHeader>
  );
}

export default AppSidebarHeader;

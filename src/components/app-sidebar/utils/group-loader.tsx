import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";

function GroupLoader({ items }: { items: number }) {
  return (
    <SidebarMenu>
      {Array.from({ length: items }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: just for loading
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

export default GroupLoader;

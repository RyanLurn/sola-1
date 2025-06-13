import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: ChatLayout,
});

function ChatLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: ChatLayout,
});

function ChatLayout() {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-y-9">
        <Outlet />
      </div>
    </div>
  );
}

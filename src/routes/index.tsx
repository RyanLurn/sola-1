import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute({
  beforeLoad: () => {
    throw redirect({ to: "/chat" });
  },
  component: IndexPage,
});

function IndexPage() {
  return null;
}

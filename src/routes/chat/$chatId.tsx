export const Route = createFileRoute({
  component: ChatPage,
});

function ChatPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      Hello chat!
    </div>
  );
}

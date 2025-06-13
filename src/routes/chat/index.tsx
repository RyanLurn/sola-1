export const Route = createFileRoute({
  component: NewChatPage,
});

function NewChatPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      Hello New chat!
    </div>
  );
}

import { Button } from "@/components/ui/button";

export const Route = createFileRoute({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}

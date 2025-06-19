import { ArrowUp, FilePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function PromptOptions({ isDisabled }: { isDisabled: boolean }) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-x-2">
        <Button size="icon" variant="outline" disabled={isDisabled}>
          <FilePlus />
        </Button>
      </div>
      <div className="flex gap-x-2">
        <Button size="icon" disabled={isDisabled}>
          {isDisabled ? <Loader2 className="animate-spin" /> : <ArrowUp />}
        </Button>
      </div>
    </div>
  );
}

export default PromptOptions;

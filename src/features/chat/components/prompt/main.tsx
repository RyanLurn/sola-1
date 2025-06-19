import { useParams } from "@tanstack/react-router";
import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";
import { db } from "@/database/connection";
import PromptEditor from "@/features/chat/components/prompt/editor";
import PromptOptions from "@/features/chat/components/prompt/options/main";

function PromptContainer() {
  const { chatId } = useParams({ strict: false });
  const streamMessages = useLiveQuery(
    () => db.messages.where({ chatId, isStreaming: true }).toArray(),
    [chatId],
  );
  const isDisabled = useMemo(() => {
    if (streamMessages && streamMessages.length > 0) {
      return true;
    }
    return false;
  }, [streamMessages]);

  return (
    <div className="sticky bottom-3 flex max-h-1/2 w-full flex-col gap-y-3 rounded-lg border-2 border-solid border-border bg-sidebar px-4 py-3">
      <PromptEditor isDisabled={isDisabled} />
      <PromptOptions isDisabled={isDisabled} />
    </div>
  );
}

export default PromptContainer;

import { use$ } from "@legendapp/state/react";
import promptStore$ from "@/features/chat/stores/prompt";

function PromptEditor({ isDisabled }: { isDisabled: boolean }) {
  const prompt = use$(promptStore$);
  return (
    <textarea
      className="field-sizing-content min-h-16 resize-none focus:outline-none"
      rows={3}
      placeholder={
        isDisabled ? "Waiting for response..." : "Enter your message"
      }
      disabled={isDisabled}
      value={prompt}
      onChange={(e) => promptStore$.set(e.target.value)}
    />
  );
}

export default PromptEditor;

import MarkdownContent from "@/features/chat/components/message/content/markdown";
import ThoughtContent from "@/features/chat/components/message/content/thought";
import extractReasoning from "@/features/chat/lib/utils/extract-reasoning";

function MessageContent({ content, name }: { content: string; name: string }) {
  const { thinking, response } = extractReasoning(content || "*Thinking...*");

  return (
    <div className="flex w-full flex-col gap-y-2">
      {thinking && <ThoughtContent name={name} thinking={thinking} />}
      <MarkdownContent content={response} />
    </div>
  );
}

export default MessageContent;

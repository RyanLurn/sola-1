import MessageAvatar from "@/features/chat/components/message/avatar";
import MessageContent from "@/features/chat/components/message/content/main";

function Message({ name, content }: { name: string; content: string }) {
  return (
    <div className="flex w-full gap-x-2">
      <MessageAvatar name={name} />
      <div className="flex w-full flex-col gap-y-2">
        <div className="text-lg font-semibold">{name}</div>
        <MessageContent content={content} name={name} />
      </div>
    </div>
  );
}

export default Message;

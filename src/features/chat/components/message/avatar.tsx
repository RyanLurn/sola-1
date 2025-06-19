import { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MessageAvatar = memo(function MessageAvatar({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl?: string;
}) {
  const fallback = name.slice(0, 2).toUpperCase();

  return (
    <Avatar>
      <AvatarImage src={imgUrl} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
});

export default MessageAvatar;

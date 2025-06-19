import type { AssistantContent, UserContent } from "ai";

type AgentType = {
  id: string;
  name: string;
  model: {
    provider: string;
    name: string;
  };
  system: string;
};

type ChatType = {
  id: string;
  title: string;
  participantIds: Array<string>;
};

type UserMessageType = {
  role: "user";
  content: UserContent;
};

type AssistantMessageType = {
  role: "assistant";
  content: AssistantContent;
  agentId: string;
};

type MessageType = (UserMessageType | AssistantMessageType) & {
  id: string;
  chatId: string;
  recipientIds: Array<string>;
};

export type { AgentType, ChatType, MessageType };

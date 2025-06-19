type ModelType = {
  provider: string;
  name: string;
};

type AgentType = {
  id: string;
  name: string;
  model: ModelType;
  system: string;
  imageUrl?: string;
};

type ChatType = {
  id: string;
  title: string;
  lastOpenedAt: number;
  participantIds: Array<string>;
};

type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming: boolean;
  agentId?: string;
  chatId: string;
  recipientIds: Array<string>;
};

export type { AgentType, ChatType, MessageType, ModelType };

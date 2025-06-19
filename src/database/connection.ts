import Dexie, { type EntityTable } from "dexie";
import type {
  AgentType,
  ChatType,
  MessageType,
} from "@/features/chat/lib/types";

const db = new Dexie("Db1") as Dexie & {
  agents: EntityTable<AgentType, "id">;
  chats: EntityTable<ChatType, "id">;
  messages: EntityTable<MessageType, "id">;
};

db.version(1).stores({
  agents: "++id, name",
  chats: "++id, title",
  messages: "++id, chatId",
});

export { db };

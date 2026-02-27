import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const { db } = await import("./db");
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export class MemoryStorage implements IStorage {
  private messages: ContactMessage[] = [];
  private nextId = 1;

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const message: ContactMessage = {
      id: this.nextId++,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }
}

export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemoryStorage();

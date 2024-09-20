import { pgTable, serial, varchar, integer, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table
export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull(),
  lastLogin: timestamp('last_login'),
  role: varchar('role', { length: 50 }).notNull(), // 'admin', 'user'
});

// AI Service Interactions table
export const aiServiceInteractions = pgTable('ai_service_interactions', {
  interactionId: serial('interaction_id').primaryKey(),
  userId: integer('user_id').notNull(),
  query: text('query').notNull(),
  response: text('response').notNull(),
  interactionTime: timestamp('interaction_time').notNull(),
  sourceId: integer('source_id'), // Optional reference
});

// Data Sources table
export const dataSources = pgTable('data_sources', {
  sourceId: serial('source_id').primaryKey(),
  sourceName: varchar('source_name', { length: 255 }).notNull(),
  connectionString: text('connection_string').notNull(),
  createdAt: timestamp('created_at').notNull(),
  description: text('description'),
});

// File Sources table
export const fileSources = pgTable('file_sources', {
  fileId: serial('file_id').primaryKey(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  filePath: text('file_path').notNull(),
  uploadedBy: integer('uploaded_by').notNull(),
  uploadedAt: timestamp('uploaded_at').notNull(),
  description: text('description'),
});

// Audit Logs table
export const auditLogs = pgTable('audit_logs', {
  logId: serial('log_id').primaryKey(),
  userId: integer('user_id').notNull(),
  action: varchar('action', { length: 255 }).notNull(),
  timestamp: timestamp('timestamp').notNull(),
  details: text('details'),
});

// Interaction Histories table
export const interactionHistories = pgTable('interaction_histories', {
  historyId: serial('history_id').primaryKey(),
  interactionId: integer('interaction_id').notNull(),
  userId: integer('user_id').notNull(),
  query: text('query').notNull(),
  response: text('response').notNull(),
  interactionTime: timestamp('interaction_time').notNull(),
  status: varchar('status', { length: 50 }).notNull(), // e.g., 'successful', 'failed'
  responseTime: integer('response_time'),
});

export const usersRelations = relations(users, ({ many }) => ({
  uploadedFiles: many(fileSources),
  interactions: many(aiServiceInteractions),
  auditLogs: many(auditLogs),
  interactionHistories: many(interactionHistories),
}));

export const aiServiceInteractionsRelations = relations(aiServiceInteractions, ({ one }) => ({
  user: one(users, { fields: [aiServiceInteractions.userId], references: [users.userId] }),
  dataSource: one(dataSources, {
    fields: [aiServiceInteractions.sourceId],
    references: [dataSources.sourceId],
  }),
  fileSource: one(fileSources, {
    fields: [aiServiceInteractions.sourceId],
    references: [fileSources.fileId],
  }),
}));

export const fileSourcesRelations = relations(fileSources, ({ one }) => ({
  uploader: one(users, { fields: [fileSources.uploadedBy], references: [users.userId] }),
}));

export const interactionHistoriesRelations = relations(interactionHistories, ({ one }) => ({
  user: one(users, { fields: [interactionHistories.userId], references: [users.userId] }),
  interaction: one(aiServiceInteractions, {
    fields: [interactionHistories.interactionId],
    references: [aiServiceInteractions.interactionId],
  }),
}));

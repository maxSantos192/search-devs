import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  login: z.string(),
  avatar_url: z.string(),
  bio: z.string(),
  email: z.string(),
  location: z.string(),
  followers: z.number(),
  following: z.number(),
  company: z.string(),
  blog: z.string(),
  twitter_username: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const repositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  html_url: z.string(),
  stargazers_count: z.number(),
  updated_at: z.string(),
});

export type Repository = z.infer<typeof repositorySchema>;

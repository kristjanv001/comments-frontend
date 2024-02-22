import { User } from "./user";

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
  votedUsers?: { [key: string]: string };
}

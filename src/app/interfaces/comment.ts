import { User } from "./user";
import { Image } from "./image";

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Comment[];
}

export interface CommentData {
  currentUser: {
    image: Image;
    username: string;
  };
  comments: Comment[];
}

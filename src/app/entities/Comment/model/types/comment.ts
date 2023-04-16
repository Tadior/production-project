import { User } from "app/entities/User";

export interface Comment {
  id: string;
  user: User;
  text: string;
  articleId?: string;
  userId?: string;
}

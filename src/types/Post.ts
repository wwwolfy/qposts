import { Comment } from './Comment';
export interface PostDTO {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Post extends PostDTO {
  author?: string;
  comments?: Comment[];
}

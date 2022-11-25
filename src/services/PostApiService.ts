import { Comment } from '../types/Comment';
import { Post, PostDTO } from '../types/Post';
import { HttpService } from './HttpService';

class PostApiService extends HttpService {
  public readonly postsUrl = '/posts';
  public readonly postUrl = (id: string) => `/posts/${id}`;

  public readonly commentsUrl = '/comments';

  public getPosts = async () => {
    return this.instance.get<PostDTO[]>(this.postsUrl);
  };

  public getPost = async (url: string) => {
    return this.instance.get<PostDTO>(url);
  };

  public getComments = async () => {
    return this.instance.get<Comment[]>(this.commentsUrl);
  };
}

export const postApiService = new PostApiService();

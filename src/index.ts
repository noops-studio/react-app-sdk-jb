import { ApiClient } from './Client';
import { AuthAPI } from './api/auth';
import { PostsAPI } from './api/posts';
import { CommentsAPI } from './api/comments';
import { FollowsAPI } from './api/follows';
import { FeedAPI } from './api/feed';

export class ApiSDK {
  private client: ApiClient;
  public auth: AuthAPI;
  public posts: PostsAPI;
  public comments: CommentsAPI;
  public follows: FollowsAPI;
  public feed: FeedAPI;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.client = new ApiClient(baseURL, headers);
    this.auth = new AuthAPI(this.client);
    this.posts = new PostsAPI(this.client);
    this.comments = new CommentsAPI(this.client);
    this.follows = new FollowsAPI(this.client);
    this.feed = new FeedAPI(this.client);
  }
}

import { ApiClient } from '../client';

export class FeedAPI {
  constructor(private client: ApiClient) {}

  async fetchUserFeed(variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/feed',
      delayed: '/delay/feed',
      allow: '/allow/feed',
      allowDelayed: '/delay/allow/feed',
    };
    return await this.client.get(pathMap[variant]);
  }
}

import { ApiClient } from '../Client';

export class FollowsAPI {
  constructor(private client: ApiClient) {}

  async getFollowers(variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/follows/followers',
      delayed: '/delay/follows/followers',
      allow: '/allow/follows/followers',
      allowDelayed: '/delay/allow/follows/followers',
    };
    return await this.client.get(pathMap[variant]);
  }

  async getFollowing(variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/follows/following',
      delayed: '/delay/follows/following',
      allow: '/allow/follows/following',
      allowDelayed: '/delay/allow/follows/following',
    };
    return await this.client.get(pathMap[variant]);
  }

  async follow(userId: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/follows/follow/${userId}`,
      delayed: `/delay/follows/follow/${userId}`,
      allow: `/allow/follows/follow/${userId}`,
      allowDelayed: `/delay/allow/follows/follow/${userId}`,
    };
    return await this.client.post(pathMap[variant]);
  }

  async unfollow(userId: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/follows/unfollow/${userId}`,
      delayed: `/delay/follows/unfollow/${userId}`,
      allow: `/allow/follows/unfollow/${userId}`,
      allowDelayed: `/delay/allow/follows/unfollow/${userId}`,
    };
    return await this.client.post(pathMap[variant]);
  }
}
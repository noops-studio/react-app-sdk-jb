import { ApiClient } from '../Client';
export class CommentsAPI {
  constructor(private client: ApiClient) {}

  async fetchAll(variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/comments',
      delayed: '/delay/comments',
      allow: '/allow/comments',
      allowDelayed: '/delay/allow/comments',
    };
    return await this.client.get(pathMap[variant]);
  }

  async fetchByPostId(postId: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/comments/${postId}`,
      delayed: `/delay/comments/${postId}`,
      allow: `/allow/comments/${postId}`,
      allowDelayed: `/delay/allow/comments/${postId}`,
    };
    return await this.client.get(pathMap[variant]);
  }

  async create(postId: string, body: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/comments/${postId}`,
      delayed: `/delay/comments/${postId}`,
      allow: `/allow/comments/${postId}`,
      allowDelayed: `/delay/allow/comments/${postId}`,
    };
    return await this.client.post(pathMap[variant], { body });
  }

  async update(id: string, body: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/comments/${id}`,
      delayed: `/delay/comments/${id}`,
      allow: `/allow/comments/${id}`,
      allowDelayed: `/delay/allow/comments/${id}`,
    };
    return await this.client.patch(pathMap[variant], { body });
  }

  async delete(id: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/comments/${id}`,
      delayed: `/delay/comments/${id}`,
      allow: `/allow/comments/${id}`,
      allowDelayed: `/delay/allow/comments/${id}`,
    };
    return await this.client.delete(pathMap[variant]);
  }
}

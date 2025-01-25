import { ApiClient } from '../client';
export class PostsAPI {
  constructor(private client: ApiClient) {}

  async fetchAll(variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/posts',
      delayed: '/delay/posts',
      allow: '/allow/posts',
      allowDelayed: '/delay/allow/posts',
    };
    return await this.client.get(pathMap[variant]);
  }

  async fetchById(id: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/posts/${id}`,
      delayed: `/delay/posts/${id}`,
      allow: `/allow/posts/${id}`,
      allowDelayed: `/delay/allow/posts/${id}`,
    };
    return await this.client.get(pathMap[variant]);
  }

  async create(title: string, body: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/posts',
      delayed: '/delay/posts',
      allow: '/allow/posts',
      allowDelayed: '/delay/allow/posts',
    };
    return await this.client.post(pathMap[variant], { title, body });
  }

  async update(id: string, title: string, body: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/posts/${id}`,
      delayed: `/delay/posts/${id}`,
      allow: `/allow/posts/${id}`,
      allowDelayed: `/delay/allow/posts/${id}`,
    };
    return await this.client.patch(pathMap[variant], { title, body });
  }

  async delete(id: string, variant: 'standard' | 'delayed' | 'allow' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: `/posts/${id}`,
      delayed: `/delay/posts/${id}`,
      allow: `/allow/posts/${id}`,
      allowDelayed: `/delay/allow/posts/${id}`,
    };
    return await this.client.delete(pathMap[variant]);
  }
}

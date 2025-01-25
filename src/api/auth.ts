import { ApiClient } from '../Client';
export class AuthAPI {
  constructor(private client: ApiClient) {}

  async login(username: string, password: string, variant: 'standard' | 'delayed' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/auth/login',
      delayed: '/delay/auth/login',
      allowDelayed: '/delay/allow/auth/login',
    };
    const response = await this.client.post(pathMap[variant], { username, password });
    if (variant === 'standard') {
      console.log(response)
      this.client.setToken(response.jwt);
    }
    return response;
  }

  async signup(username: string, password: string, name: string, variant: 'standard' | 'delayed' | 'allowDelayed' = 'standard') {
    const pathMap = {
      standard: '/auth/signup',
      delayed: '/delay/auth/signup',
      allowDelayed: '/delay/allow/auth/signup',
    };
    const response = await this.client.post(pathMap[variant], { username, password, name });
    if (variant === 'standard') {
      this.client.setToken(response.jwt);
    }
    return response;
  }
}

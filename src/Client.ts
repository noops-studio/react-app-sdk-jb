// src/client.ts
import axios from 'axios';

export class ApiClient {
  private client;
  private token: string | null = null;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.client = axios.create({ baseURL, headers });

    this.client.interceptors.request.use((config) => {
      if (this.token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });

    this.client.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const message = error.response?.data?.message || 'An error occurred';
        return Promise.reject(new Error(message));
      }
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  async get<T = any>(url: string): Promise<T> {
    const response = await this.client.get(url);
    return response.data as T;
  }

  async post<T = any>(url: string, data: any = {}): Promise<T> {
    const response = await this.client.post(url, data);
    return response.data as T;
  }

  async patch<T = any>(url: string, data: any): Promise<T> {
    const response = await this.client.patch(url, data);
    return response.data as T;
  }

  async delete<T = any>(url: string): Promise<T> {
    const response = await this.client.delete(url);
    return response.data as T;
  }
}

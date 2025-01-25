import axios, { AxiosInstance } from 'axios';

export class ApiClient {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.client = axios.create({ baseURL, headers });

    this.client.interceptors.request.use((config) => {
      if (this.token) {
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

  async get<T = any>(url: string) {
    return await this.client.get<T>(url);
  }

  async post<T = any>(url: string, data: any) {
    return await this.client.post<T>(url, data);
  }

  async patch<T = any>(url: string, data: any) {
    return await this.client.patch<T>(url, data);
  }

  async delete<T = any>(url: string) {
    return await this.client.delete<T>(url);
  }
}

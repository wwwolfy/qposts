import axios, { AxiosError, AxiosInstance } from 'axios';

export abstract class HttpService {
  private readonly baseURL: string = import.meta.env.VITE_BACKEND_URL as string;
  protected instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
    this.responseInterceptor();
  }

  private responseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => response.data,
      this.handleError
    );
  };

  private handleError = async (error: AxiosError) => {
    throw error;
  };
}

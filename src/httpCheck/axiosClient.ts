import axios, { AxiosInstance } from "axios";

export type AxiosCallConfig = {
  method: string;
  url: string;
  data?: any;
  headers?: any;
  params?: any;
};

export class AxiosClient {
  private axios: AxiosInstance;

  constructor(baseUrl: string) {
    this.axios = axios.create({ baseURL: baseUrl });
  }

  async makeCall(axiosCallConfig: AxiosCallConfig) {
    return this.axios.request(axiosCallConfig);
  }

  async makeRandomCall() {
    const endpoint =
      Math.random() > 0.1 ? 200 : Math.random() > 0.33 ? 500 : 400;
    const randomSleep = Math.floor(Math.random() * 1000);
    return new Promise<400 | 500 | 200>((resolve, reject) => {
      setTimeout(() => {
        resolve(endpoint);
      }, randomSleep);
    });
  }
}

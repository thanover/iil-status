import axios, { AxiosError, AxiosInstance } from "axios";

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
      Math.random() > 0.66 ? 200 : Math.random() > 0.33 ? 500 : 400;
    const randomSleep = Math.floor(Math.random() * 10000);
    return new Promise<400 | 500 | 200>((resolve, reject) => {
      setTimeout(() => {
        resolve(endpoint);
      }, randomSleep);
    });

    // try {
    //   response = this.axios.request({
    //     method: "GET",
    //     url: `${endpoint}`,
    //     params: { sleep: randomSleep },
    //   });
    // } catch (error) {
    //   const err = error as AxiosError;
    //   if (!response) throw Error("NO RESPONSE");

    //   response = err.response;
    // }

    // return response;
  }
}

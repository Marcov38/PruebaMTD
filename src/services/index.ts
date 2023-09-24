import axios, { AxiosInstance } from "axios";

export abstract class ServiceBase {
  readonly client: AxiosInstance;
  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }
}

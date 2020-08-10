import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from 'config';

export default abstract class Service {
  abstract fetch(params: any): any;

  public api: AxiosInstance;

  constructor(data: AxiosRequestConfig) {
    const conf: AxiosRequestConfig = {
      baseURL: config.get('service_base_url'),
      ...data
    };
    this.api = axios.create(conf);
  }

  public async get(url: string): Promise<any> {
    try {
      return await this.api.get(url);
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }

  public async post(url: string, data: JSON | any): Promise<any> {
    try {
      return await this.api.post(url, data);
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }
}

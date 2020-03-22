import axios, { AxiosInstance } from 'axios';
import config from 'config';

export default abstract class Service {
  abstract fetch(params: any): any;
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: config.get('service_base_url')
    });
  }

  public async get(url: string): Promise<any> {
    try {
      const result = await this.api.get(url);
      return result;
    } catch (err) {
      throw 'Something went wrong';
    }
  }

  public async post(url: string, data: JSON): Promise<any> {
    try {
      const result = await this.api.post(url, data);
      return result;
    } catch (err) {
      throw 'Something went wrong';
    }
  }
}

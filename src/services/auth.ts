import Service from './service';

export class AuthData {
  roles = '';
  resource = '';
  action = '';
}

export default class AuthService extends Service {
  public async fetch(params: AuthData): Promise<any> {
    const url = `/auth/role_permission/?roles=${params.roles}&resource=${params.resource}&action=${params.action}`;
    return await this.get(url);
  }
}

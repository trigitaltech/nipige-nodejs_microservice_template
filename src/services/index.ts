import TestService from './test';
import AuthService from './auth';
import { AuthData } from './DataTypes'
/**
 * Usages
 * import {TestService} from './service'
 *
 *  new TestService().fetch()
 *      .then(data => console.log(data))
 *      .catch(err => console.log(err));
 *
 * let authService = new AuthService();
 * await authService.fetch({ action: 'asdf', resource: 'asdf', roles: '' })
 *
 */

export { TestService, AuthService, AuthData };

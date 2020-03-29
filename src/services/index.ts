import TestService from './test';
import AuthService, { AuthData } from './auth';
/**
 * Usages
 * import {TestService} from './service'
 *
 *  new TestService().fetch()
 *      .then(data => console.log(data))
 *      .catch(err => console.log(err));
 *
 */

export { TestService, AuthService, AuthData };

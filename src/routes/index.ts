import Router from 'koa-joi-router';
import healthCheckRouter from './healthCheck';
import { handleError } from '../middleware';

const router = Router();

router.route({
  handler: [
    handleError,
    (ctx) => {
      ctx.body = {
        response: 'Ok'
      };
    }
  ],
  method: 'GET',
  path: '/'
});

router.use(healthCheckRouter.middleware());

export default router;

import Router from 'koa-joi-router';
import { healthCheck } from './../controllers/healthCheck';

const router = Router();

router.route({
  method: 'GET',
  path: '/.well-known/healthcheck.json',
  handler: [healthCheck]
});

export default router;
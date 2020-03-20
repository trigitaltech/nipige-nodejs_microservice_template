import Koa from 'koa';
import Router from 'koa-router';
import config from 'config';
import { logger } from './utils/logger';
import { healthCheck } from './controllers/healthCheck';

export const app = new Koa();
export const router = new Router();

app.on('error', error => {
  logger.error(error, 'application error');
});

router.get('/', healthCheck);
router.get('/.well-known/healthcheck.json', healthCheck);

app.use(router.routes());
app.listen(config.get('port'), () => {
  logger.info(`server listening on port : ${config.get('port')} `);
});

import Koa from 'koa';
import config from 'config';
import { logger } from './utils/logger';
import routes from './routes';

export const app = new Koa();

app.on('error', error => {
  logger.error(error, 'application error');
});

app.use(routes.middleware());

app.listen(config.get('port'), () => {
  logger.info(`server listening on port : ${config.get('port')} `);
});

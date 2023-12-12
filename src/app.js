import express from 'express';

import { router } from './routes/index.js';
import { envs } from './config/envirotment/envirotment.js';
import morgan from 'morgan';
import { AppError } from './common/errors/appError.js';
import { globalErrorHandler } from './common/errors/errorController.js';

//2. crearnos una constante app que tendra
//todas las funcionalidades de express

//routes

const app = express();
//middlewares para leer json y url-encode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (envs.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//rutas

app.use('/api/v1', router);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`can't find ${req.originalUrl} on this server`, 404)
  );
});

app.use(globalErrorHandler);

export default app;

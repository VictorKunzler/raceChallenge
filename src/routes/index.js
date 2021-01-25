import { Router } from 'express';
import fileRoute from './file.routes';

const routes = Router();

fileRoute(routes);

// siteRoute(routes);

module.exports = routes;
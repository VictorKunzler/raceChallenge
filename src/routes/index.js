import { Router } from 'express';
import fileRoute from './file.routes';
import raceRoute from './race.routes';
import ruleRoute from './rule.routes';
import tournamentRoute from './tournament.routes';

const routes = Router();

fileRoute(routes);
tournamentRoute(routes);
ruleRoute(routes);
raceRoute(routes);

module.exports = routes;

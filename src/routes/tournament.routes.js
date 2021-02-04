import tournamentController from '../controllers/tournament.controller';

const tournamentRoute = (routes) => {
  routes.get('/tournaments', tournamentController.getAll);
  routes.get('/tournaments/:year', tournamentController.get);
  routes.get('/tournaments/:year/classification', tournamentController.getClassification);
  routes.get('/tournaments/:year/pilots', tournamentController.getPilots);
  routes.get('/tournaments/:year/automobiles', tournamentController.getAutomobiles);
};

export default tournamentRoute;

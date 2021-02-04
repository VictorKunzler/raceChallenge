import raceController from '../controllers/race.controller';

const raceRoute = (routes) => {
  routes.get('/tournaments/:year/races', raceController.getPerYear);

  routes.get('/tournaments/:year/races/:mounth/:day/classification', raceController.getClassification);
};

export default raceRoute;

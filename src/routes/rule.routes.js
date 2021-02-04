import ruleController from '../controllers/rule.controller';

const ruleRoute = (routes) => {
  routes.get('/rules', ruleController.getAll);
};

export default ruleRoute;

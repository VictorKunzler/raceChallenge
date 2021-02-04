import fileController from '../controllers/file.controller';

const fileRoute = (routes) => {
  routes.post(`/file`, fileController.uploadFile);
};

export default fileRoute;

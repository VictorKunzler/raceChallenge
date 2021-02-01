import fileController from '../controllers/file.controller';

const fileRoute = (routes) => {
  routes.post(`/file`, async (req, res) => {
    try {
      const race = await fileController.uploadFile(req.files);
      res.send(race);
    } catch (e) {
      console.log(e);
      res.status(e.status).send(e.message);
    };
  });
};

export default fileRoute;

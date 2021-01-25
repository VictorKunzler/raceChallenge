import fileController from '../controllers/file.controller';

const fileRoute = (routes) => {
  routes.post(`/file`, async (req, res) => {
    try {
      const object = await fileController.uploadFile(req.files);
      console.log(req.files);
      res.send('file');
    } catch (e) {
      console.log(e);
      res.status(e.status).send(e.message);
    };
  });
};

export default fileRoute;

import fileService from '../services/file.service';

const uploadFile = async (req, res) => {
  const { race } = req.files;
  try {
    res.send(await fileService.processFile(race));
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const fileController = {
  uploadFile
};

export default fileController;

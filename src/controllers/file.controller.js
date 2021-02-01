import httoErrors from 'http-errors';
import fileErrors from '../errors/file.errors';
import fileService from "../services/file.service";

const uploadFile = async (file) => {
  const { race } = file;

  try {
    return await fileService.processFile(race);
  } catch (e) {
    console.log(e);
    throw new httoErrors.BadRequest(fileErrors[e.message]);
  }
};

const fileController = {
  uploadFile
};

export default fileController;

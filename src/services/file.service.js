import fileValidator from '../validators/file';

const processFile = async (file) => {
  const { name, data } = file;
  const raceName = name.substr(0, name.lastIndexOf('.')) || name;
  
  await fileValidator.name(raceName);
};

const fileService = {
  processFile
};

export default fileService;

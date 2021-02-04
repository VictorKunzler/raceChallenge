import { Automobile } from '../../models';

const get = async (options) => {
  return await Automobile.findAll(options);
};

const insert = async (automobile, transaction) => {
  return await Automobile.create(automobile, { transaction });
};

const automobileRepository = {
  get,
  insert
};

export default automobileRepository;

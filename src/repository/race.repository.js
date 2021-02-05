import { Race } from '../../models';

const get = async (options) => {
  return await Race.findAll(options);
};

const insert = async (race, transaction) => {
  return await Race.create(race, { transaction });
};

const raceRepository = {
  get,
  insert
};

export default raceRepository;

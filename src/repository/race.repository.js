import { Race } from '../../models';

const get = async (where, transaction) => {
  return await Race.findAll({
    where,
    transaction
  });
};

const insert = async (race, transaction) => {
  return await Race.create(race, { transaction });
};

const raceRepository = {
  get,
  insert
};

export default raceRepository;

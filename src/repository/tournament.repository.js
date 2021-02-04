import { Tournament } from '../../models';

const get = async (options) => {
  return await Tournament.findAll(options);
};

const insert = async (tournament, transaction) => {
  return await Tournament.create(tournament, { transaction });
};

const tournamentRepository = {
  get,
  insert
};

export default tournamentRepository;

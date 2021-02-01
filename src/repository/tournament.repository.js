import { Tournament } from '../../models';

const get = async (where, transaction) => {
  return await Tournament.findAll({
    where,
    transaction
  });
};

const insert = async (tournament, transaction) => {
  return await Tournament.create(tournament, { transaction });
};

const tournamentRepository = {
  get,
  insert
};

export default tournamentRepository;

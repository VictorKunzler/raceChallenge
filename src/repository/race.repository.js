import { Race } from '../../models';

const get = async (options) => {
  return await Race.findAll(options);
};

const getCountPerTournament = async (tournamentId) => {
  return await Race.count({
    where: {
      tournamentId
    }
  })
};

const insert = async (race, transaction) => {
  return await Race.create(race, { transaction });
};

const raceRepository = {
  get,
  getCountPerTournament,
  insert
};

export default raceRepository;

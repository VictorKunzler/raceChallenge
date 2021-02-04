import { RaceClassification } from '../../models';

const get = async (options) => {
  return await RaceClassification.findAll(options);
};

const getCountAutomobilesTournament = async (tournamentId) => {
  return await RaceClassification.findAndCountAll({
    attributes: ['automobileId'],
    where: {
      tournamentId
    }
  })
};

const insert = async (raceClassification, transaction) => {
  return await RaceClassification.create(raceClassification, { transaction });
};

const raceClassificationRepository = {
  get,
  getCountAutomobilesTournament,
  insert
};

export default raceClassificationRepository;

import automobileRepository from '../repository/automobile.repository';
import raceClassificationRepository from '../repository/raceClassification.repository';

const get = async (options) => {
  return await automobileRepository.get(options);
};

const getOrInsert = async ({ number, transaction }) => {
  const automobile = await get({ where: { number }, transaction });
  
  if (!automobile.length) return await automobileRepository.insert({ number }, transaction);
  
  return automobile[0];
};

const automobileService = {
  get,
  getOrInsert
};

export default automobileService;

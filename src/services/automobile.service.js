import automobileRepository from "../repository/automobile.repository";

const getOrInsert = async ({ number, transaction }) => {
  const automobile = await automobileRepository.getAutomobile({ number }, transaction);
  
  if (!automobile.length) return await automobileRepository.insert({ number }, transaction);
  
  return automobile[0];
};

const automobileService = {
  getOrInsert
};

export default automobileService;

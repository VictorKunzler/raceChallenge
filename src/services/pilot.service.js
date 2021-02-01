import pilotRepository from '../repository/pilot.repository';

const getOrInsert = async ({ name, transaction }) => {
  const pilot = await pilotRepository.get({ name }, transaction);
  
  if (!pilot.length) return await pilotRepository.insert({ name }, transaction);
  
  return pilot[0];
};

const pilotService = {
  getOrInsert
};

export default pilotService;

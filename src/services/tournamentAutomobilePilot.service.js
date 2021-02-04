import tournamentAutomobilePilotRepository from '../repository/tournamentAutomobilePilot.repository';

const get = async (options) => {
  return await tournamentAutomobilePilotRepository.get(options);
};

const getOrInsert = async ({ pilotId, automobileId, tournamentId, transaction }) => {
  const tournamentAutomobilePilot = await get(
    {
      where: {
        automobileId,
        tournamentId,
        pilotId
      },
      transaction
    }
  );
  
  if (!tournamentAutomobilePilot.length) return await tournamentAutomobilePilotRepository.insert({ pilotId, automobileId, tournamentId }, transaction);
  
  return tournamentAutomobilePilot[0];
};

const tournamentAutomobilePilotService = {
  get,
  getOrInsert
};

export default tournamentAutomobilePilotService;

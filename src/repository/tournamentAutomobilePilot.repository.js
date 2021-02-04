import { TournamentAutomobilePilot } from '../../models';

const get = async (options) => {
  return await TournamentAutomobilePilot.findAll(options);
};

const insert = async (tournamentAutomobilePilot, transaction) => {
  return await TournamentAutomobilePilot.create(tournamentAutomobilePilot, { transaction });
};

const tournamentAutomobilePilotRepository = {
  get,
  insert
};

export default tournamentAutomobilePilotRepository;

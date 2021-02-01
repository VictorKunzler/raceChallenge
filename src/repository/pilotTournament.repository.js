import { PilotTournament } from '../../models';

const get = async (where, transaction) => {
  return await PilotTournament.findAll({
    where,
    transaction
  });
};

const insert = async (pilotTournament, transaction) => {
  return await PilotTournament.create(pilotTournament, { transaction });
};

const update = async (pilotTournament, attributes, transaction) => {
  return await pilotTournament.update(attributes, { transaction });
};

const PilotTournamentRepository = {
  get,
  insert,
  update
};

export default PilotTournamentRepository;

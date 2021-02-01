import { Pilot } from '../../models';

const get = async (where, transaction) => {
  return await Pilot.findAll({
    where,
    transaction
  });
};

const insert = async (pilot, transaction) => {
  return await Pilot.create(pilot, { transaction });
};

const pilotRepository = {
  get,
  insert
};

export default pilotRepository;

import { Pilot } from '../../models';

const get = async (options) => {
  return await Pilot.findAll(options);
};

const insert = async (pilot, transaction) => {
  return await Pilot.create(pilot, { transaction });
};

const pilotRepository = {
  get,
  insert
};

export default pilotRepository;

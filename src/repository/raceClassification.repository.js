import { RaceClassification } from '../../models';

const insert = async (raceClassification, transaction) => {
  return await RaceClassification.create(raceClassification, { transaction });
};

const raceClassificationRepository = {
  insert
};

export default raceClassificationRepository;

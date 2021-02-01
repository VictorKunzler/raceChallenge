import { Automobile } from '../../models';

const getAutomobile = async (where, transaction) => {
  return await Automobile.findAll({
    where,
    transaction
  });
};

const insert = async (automobile, transaction) => {
  return await Automobile.create(automobile, { transaction });
};

const automobileRepository = {
  getAutomobile,
  insert
};

export default automobileRepository;

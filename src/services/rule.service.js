import ruleRepository from '../repository/rule.repository';

const getAll = async () => {
  return await ruleRepository.get();
};

const ruleService = {
  getAll
};

export default ruleService;

import { Rule } from '../../models';

const get = async () => {
  return await Rule.findAll({
    order: [['points', 'DESC']]
  });
};

const ruleRepository = {
  get
};

export default ruleRepository;

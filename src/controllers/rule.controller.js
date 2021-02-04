import ruleService from '../services/rule.service';

const getAll = async (req, res) => {
  try {
    const rules = await ruleService.getAll();
    res.send(rules);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const ruleController = {
  getAll
};

export default ruleController;

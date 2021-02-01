
import Joi from 'joi';

const UNIQUE_KEYS = [
  'StartingGrid',
  'Name',
  'Automobile'
];

const pilotSchema = Joi.object({
  Automobile: Joi.number().required(),
  Name: Joi.string().required(),
  TotalLaps: Joi.number().required(),
  TotalTime: Joi.number().required(),
  BestLap: Joi.number().required(),
  TimeBestLap: Joi.number().required(),
  Diff: Joi.number().allow(null),
  Gap: Joi.number().allow(null),
  StartingGrid: Joi.number().required(),
  AverageVelocity: Joi.number().required()
});

const raceSchema = Joi.array().max(14);

const validatePilotData = (race) => {
  let uniqueData = {};
  UNIQUE_KEYS.forEach(key => {
    uniqueData[key] = [];
  });

  race.forEach(pilot => {
    const { error } = pilotSchema.validate(pilot);
    if (error) {
      console.log(error.message);
      throw new Error(203);
    }

    for (const key in uniqueData) {
      if (uniqueData[key].indexOf(pilot[key]) > -1) throw new Error(203);
      uniqueData[key].push(pilot[key]);
    }
  });
};

const data = (race = {}) => {
  const { error } = raceSchema.validate(race);
  if (error) {
    console.log(error.message);
    throw new Error(203);
  }

  validatePilotData(race);

  return true;
};

export default data;
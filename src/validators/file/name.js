import Joi from 'joi';

const name = async (fileName = '') => {
  const [race, year, month, day] = fileName.split('_');
  
  const date = Joi.date();
  
  try {
    if(race != 'race') throw new Error('First word is not race');

    await date.validateAsync(`${month}-${day}-${year}`);
  } catch (e) {
    console.log(e);
    throw new Error(201);
  }

  return true;
};

export default name;

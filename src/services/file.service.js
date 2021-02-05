import fs from 'fs';
import csvToJson from 'convert-csv-to-json';
import fileValidator from '../validators/file';
import raceService from './race.service';

const INPUT_FILE = './races/';

const KEYS_TO_INT = [
  'Automobile',
  'TotalLaps',
  'StartingGrid',
  'BestLap',
];

const KEYS_TO_FLOAT = [
  'AverageVelocity'
];

const KEYS_TO_TIME = [
  'TotalTime',
  'TimeBestLap',
  'Diff',
  'Gap'
];

const parseDataToNumber = (data) => {
  KEYS_TO_INT.forEach(key => {
    data[key] = parseInt(data[key]);
  });

  KEYS_TO_FLOAT.forEach(key => {
    data[key] = parseFloat(data[key]);
  });
};

const parseDataToTime = (data) => {
  KEYS_TO_TIME.forEach(key => {
    const value = data[key];

    if (value) {
      const [min, sec, mil] = value.replace('.', ':').split(':');
      data[key] = (parseInt(min) * 60000) + (parseInt(sec) * 1000) + parseInt(mil);
    } else {
      data[key] = null;
    }
  });
};

const parseData = (data) => {
  const race = [];

  data.forEach(dataValues => {
    const pilot = { ...dataValues }
    parseDataToNumber(pilot);
    parseDataToTime(pilot);

    race.push(pilot);
  }); 

  return race;
};

const saveFile = async ({ name, data }) => {
  try {
    await fs.writeFileSync(INPUT_FILE + name, data, 'binary');
  } catch (e) {
    console.log(e);
    throw new Error('Error to save file');
  }
};

const processFile = async (file) => {
  const { name } = file;
  const raceName = name.substr(0, name.lastIndexOf('.')) || name;
  
  await fileValidator.name(raceName);
  
  const [, year, month, day] = raceName.split('_');

  await saveFile(file);

  const raceData = parseData(csvToJson.fieldDelimiter(',').getJsonFromCsv(INPUT_FILE + name));

  await fileValidator.data(raceData);

  return await raceService.insertRace({
    date: `${year}/${month}/${day}`,
    year: year,
    data: raceData
  });
};

const fileService = {
  parseData,
  processFile
};

export default fileService;

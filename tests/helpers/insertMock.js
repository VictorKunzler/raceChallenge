import fileService from '../../src/services/file.service';
import raceService from '../../src/services/race.service';
import mock from './mock';

const insertMock = async (date) => {
  return await raceService.insertRace({
    date,
    year: 2021,
    data: fileService.parseData(mock)
  });
};

export default insertMock;

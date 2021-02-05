import '@babel/polyfill';

import fileService from '../../src/services/file.service';
import raceService from '../../src/services/race.service';
import tournamentService from '../../src/services/tournament.service';
import resetDataBaseData from '../helpers/resetDataBaseData';
import mock from '../helpers/mock';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('insert race and get classification', () => {
  it('return a race and classification', async () => {
    const year = 2011;
    const month = 11;    
    const day = 11;

    const race = await raceService.insertRace({
      date: `${year}/${month}/${day}`,
      year: year,
      data: fileService.parseData(mock)
    });

    expect(typeof race).toBe('object');
    expect(race.id).not.toBeNull();

    const classifications = await tournamentService.getClassification(year);
    expect(classifications[0].name).toBe('Jeffery Schimmel III');
  });
});

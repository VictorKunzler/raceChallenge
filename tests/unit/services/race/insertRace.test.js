import fileService from '../../../../src/services/file.service';
import raceService from '../../../../src/services/race.service';
import insertMock from '../../../helpers/insertMock';
import mock from '../../../helpers/mock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('raceService.insertRace', () => {
  describe('insert a race', () => {
    it('return a race', async () => {
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
    });
  });

  describe('insert a existing race', () => {
    it('throw an error', async () => {
      const year = 2011;
      const month = 11;    
      const day = 11;

      await insertMock(`${year}/${month}/${day}`);

      try {
        await raceService.insertRace({
          date: `${year}/${month}/${day}`,
          year: year,
          data: fileService.parseData(mock)
        });
      } catch (e) {
        expect(e.message).toBe('Race already exists');
      }
    });
  });
});

import raceService from '../../../../src/services/race.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('raceService.getPerYear', () => {
  describe('send date', () => {
    it('return the races of the year', async () => {
      await insertMock('2021/02/03');
      await insertMock('2021/02/04');

      const response = await raceService.getPerYear(2021);

      expect(response.length).toBe(2);
    });
  });
});

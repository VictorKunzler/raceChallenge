import raceService from '../../../../src/services/race.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('raceService.getClassification', () => {
  describe('send date', () => {
    it('return the classification ordered', async () => {
      await insertMock('2021/02/03');

      const response = await raceService.getClassification('2021/02/03');

      expect(response[0].position).toBe(1);
      
    });
  });
});

import tournamentService from '../../../../src/services/tournament.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('tournamentService.getAutomobiles', () => {
  describe('get tournament automobiles', () => {
    it('return automobiles', async () => {
      await insertMock('2021/02/03');
      const automobiles = await tournamentService.getAutomobiles(2021);

      expect(automobiles.length).toBe(14);
      expect(automobiles[0]).toMatchObject({
        automobile: expect.any(Number),
        pilots: expect.any(Array)
      });
    });
  });
});

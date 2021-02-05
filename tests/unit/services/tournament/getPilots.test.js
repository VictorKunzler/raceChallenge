import tournamentService from '../../../../src/services/tournament.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('tournamentService.getPilots', () => {
  describe('get tournament pilots', () => {
    it('return pilots', async () => {
      await insertMock('2021/02/03');
      const pilots = await tournamentService.getPilots(2021);

      expect(pilots.length).toBe(14);
      expect(pilots[0]).toMatchObject({
        pilot: expect.any(String),
        automobiles: expect.any(Array)
      });
    });
  });
});

import tournamentService from '../../../../src/services/tournament.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('tournamentService.getClassification', () => {
  describe('get all url true', () => {
    it('return extra url', async () => {
      await insertMock('2021/02/03');
      const classification = await tournamentService.getClassification(2021);

      expect(classification.length).toBe(14);
      expect(classification[0].name).toBe('Jeffery Schimmel III');
    });
  });
});

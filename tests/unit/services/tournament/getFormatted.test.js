import tournamentService from '../../../../src/services/tournament.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('tournamentService.getFormatted', () => {
  describe('get all url true', () => {
    it('return extra url', async () => {
      const race = await insertMock('2021/02/03');
      const tournament = await tournamentService.getFormatted({ year: 2021 }, true);

      expect(tournament.tournament_races_url).toBe('/tournaments/2021/races');
      expect(tournament.tournament_classification_url).toBe('/tournaments/2021/classification');
      expect(tournament.tournament_automobiles_url).toBe('/tournaments/2021/automobiles');
      expect(tournament.tournament_pilots_url).toBe('/tournaments/2021/pilots');
    });
  });

  describe('get all url false', () => {
    it('return tournament_url', async () => {
      const race = await insertMock('2021/02/03');
      const tournament = await tournamentService.getFormatted({ year: 2021 });

      expect(tournament.tournament_url).toBe('/tournaments/2021');
    });
  });
});

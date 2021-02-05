import raceService from '../../../../src/services/race.service';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('raceService.getClassification', () => {
  describe('send data', () => {
    it('return the objects formmated', async () => {
      const date = '2021/02/03';

      await insertMock(date);

      const races = await raceService.getClassification(date);
      const response = await raceService.formatClassification(races);

      const expected = {
        'automobile': 3,
        'name': 'Jeffery Schimmel III',
        'position': 1,
        'points': 12,
        'total_laps': 20,
        'total_time': '5:32.495',
        'best_lap': 20,
        'time_best_lap': '0:13.416',
        'diff': '0:00.000',
        'gap': '0:00.000',
        'starting_grid': 1,
        'average_velocity': 54.3
      };

      expect(response[0]).toMatchObject(expected);
    });
  });
});

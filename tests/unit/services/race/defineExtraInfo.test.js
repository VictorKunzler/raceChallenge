import raceService from '../../../../src/services/race.service';

describe('raceService.defineExtraInfo', () => {
  describe('send data', () => {
    it('return the infos', () => {
      const data = [
        {
          TotalLaps: 20,
          TimeBestLap: 200,
          StartingGrid: 3
        },
        {
          TotalLaps:  19,
          TimeBestLap: 180,
          StartingGrid: 1
        },
        {
          TotalLaps: 20,
          TimeBestLap: 210,
          StartingGrid: 2
        }
      ]

      const {
        totalLaps,
        bestLapTimeIndex,
        poleIndex
      } = raceService.defineExtraInfo(data);

      expect(totalLaps).toBe(20);
      expect(bestLapTimeIndex).toBe(0);
      expect(poleIndex).toBe(2);
    });
  });
});

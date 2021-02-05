import data from '../../../../src/validators/file/data';

describe('file data validator', () => {
  describe('send a valid data', () => {
    it('return true', async () => {
      const dataValues = [{
        Automobile: 3,
        Name: 'Test',
        TotalLaps: 20,
        TotalTime: 376251,
        BestLap: 2,
        TimeBestLap: 98213,
        Diff: null,
        Gap: null,
        StartingGrid: 1,
        AverageVelocity: 55
      }];

      expect(await data(dataValues)).toBeTruthy();
    });
  });

  describe('send a invalid data', () => {
    it('throw error', async () => {
      try {
        const dataValues = [
          {
            Automobile: 3,
            Name: 'Test',
            TotalLaps: 20,
            TotalTime: 376251,
            BestLap: 2,
            TimeBestLap: 98213,
            Diff: null,
            Gap: null,
            StartingGrid: 1,
            AverageVelocity: 55
          },
          {
            Automobile: 3,
            Name: 'Test I',
            TotalLaps: 20,
            TotalTime: 376251,
            BestLap: 2,
            TimeBestLap: 98213,
            Diff: null,
            Gap: null,
            StartingGrid: 2,
            AverageVelocity: 55
          }
        ];

        await data(dataValues);
      } catch (e) {
        expect(e.message).toBe('Automobile is duplicated');
      }
    });
  });
});

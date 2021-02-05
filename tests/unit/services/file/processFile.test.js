import fileService from '../../../../src/services/file.service';

describe('fileService.parseData', () => {
  describe('send data', () => {
    it('return pased data', () => {
      const data = [{
        Automobile: '31',
        AverageVelocity: '54.3',
        BestLap: '20',
        Diff: '',
        Gap: '',
        Name: 'Jeffery Schimmel III',
        StartingGrid: '1',
        TimeBestLap: '00:13.416',
        TotalLaps: '20',
        TotalTime: '05:32.495'
      }];

      const expected = [{
        Automobile: 31,
        AverageVelocity: 54.3,
        BestLap: 20,
        Diff: null,
        Gap: null,
        Name: 'Jeffery Schimmel III',
        StartingGrid: 1,
        TimeBestLap: 13416,
        TotalLaps: 20,
        TotalTime: 332495
      }];

      expect(fileService.parseData(data)).toMatchObject(expected);
    });
  });
});

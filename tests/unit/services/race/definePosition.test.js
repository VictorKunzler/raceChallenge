import raceService from '../../../../src/services/race.service';

describe('raceService.definePosition', () => {
  describe('validate TotalLaps', () => {
    describe('send pilot A with less TotalLaps than B', () => {
      it('no return', () => {
        const pilotA = {
          TotalLaps: 1
        };
  
        const pilotB = {
          TotalLaps: 2
        };
  
        expect(raceService.definePosition(pilotA, pilotB)).toBeUndefined();
      });
    });

    describe('send pilot A with more TotalLaps than B', () => {
      it('return -1', () => {
        const pilotA = {
          TotalLaps: 3
        };
  
        const pilotB = {
          TotalLaps: 2
        };
  
        expect(raceService.definePosition(pilotA, pilotB)).toBe(-1);
      });
    });
  });

  describe('validate TotalTime', () => {
    describe('send pilot A with more TotalTime than B', () => {
      it('no return', () => {
        const pilotA = {
          TotalLaps: 2,
          TotalTime: 2
        };
  
        const pilotB = {
          TotalLaps: 2,
          TotalTime: 1
        };
  
        expect(raceService.definePosition(pilotA, pilotB)).toBeUndefined();
      });
    });

    describe('send pilot A with less TotalLaps than B', () => {
      it('return -1', () => {
        const pilotA = {
          TotalLaps: 2,
          TotalTime: 2
        };
  
        const pilotB = {
          TotalLaps: 2,
          TotalTime: 3
        };
  
        expect(raceService.definePosition(pilotA, pilotB)).toBe(-1);
      });
    });
  });

  describe('validate AverageVelocity', () => {
    describe('send pilot A with less AverageVelocity than B', () => {
      it('no return', () => {
        const pilotA = {
          TotalLaps: 2,
          TotalTime: 2,
          AverageVelocity: 1
        };
  
        const pilotB = {
          TotalLaps: 2,
          TotalTime: 2,
          AverageVelocity: 2
        };
  
        expect(raceService.definePosition(pilotA, pilotB)).toBeUndefined();
      });
    });

    describe('send pilot A with more AverageVelocity than B', () => {
      it('return -1', () => {
        const pilotA = {
          TotalLaps: 2,
          TotalTime: 2,
          AverageVelocity: 3
        };
  
        const pilotB = {
          TotalLaps: 2,
          TotalTime: 2,
          AverageVelocity: 2
        };
  
        expect(raceService.definePosition(pilotA, pilotB)).toBe(-1);
      });
    });
  });
});

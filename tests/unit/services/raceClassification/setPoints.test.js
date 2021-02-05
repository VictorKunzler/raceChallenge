import raceClassificationService from '../../../../src/services/raceClassification.service';

describe('setPoints', () => {
  describe('send data', () => {
    describe('send first place', () => {
      it('return 12 points', () => {
        expect(raceClassificationService.setPoints({ position: 1 })).toBe(12);
      });
    });

    describe('send second place', () => {
      it('return 10 points', () => {
        expect(raceClassificationService.setPoints({ position: 2 })).toBe(10);
      });
    });

    describe('send third place', () => {
      it('return 8 points', () => {
        expect(raceClassificationService.setPoints({ position: 3 })).toBe(8);
      });
    });

    describe('send fourth place', () => {
      it('return 6 points', () => {
        expect(raceClassificationService.setPoints({ position: 4 })).toBe(6);
      });
    });

    describe('send fifth place', () => {
      it('return 4 points', () => {
        expect(raceClassificationService.setPoints({ position: 5 })).toBe(4);
      });
    });

    describe('send sixth place', () => {
      it('return 2 points', () => {
        expect(raceClassificationService.setPoints({ position: 6 })).toBe(2);
      });
    });

    describe('send after sixth place', () => {
      it('return 1 points', () => {
        expect(raceClassificationService.setPoints({ position: 7 })).toBe(1);
      });
    });

    describe('send after sixth place and pole position', () => {
      it('return 1 point for pole and 1 point for position', () => {
        expect(raceClassificationService.setPoints({ position: 7, pole: true })).toBe(2);
      });
    });

    describe('send after sixth place and faster lap position', () => {
      it('return 1 point for faster lap and 1 point for position', () => {
        expect(raceClassificationService.setPoints({ position: 7, fasterLap: true })).toBe(2);
      });
    });
  });
});

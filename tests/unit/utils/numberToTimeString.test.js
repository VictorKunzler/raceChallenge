import numberToTimeString from '../../../src/utils/numberToTimeString';

describe('numberToStringTime', () => {
  describe('send number above a minute', () => {
    it('returns X minutes', () => {
      expect(numberToTimeString(119547)).toBe('1:59.547');
    });
  });

  describe('send number under a minute', () => {
    it('returns 0 minutes', () => {
      expect(numberToTimeString(9547)).toBe('0:09.547');
    });
  });
});

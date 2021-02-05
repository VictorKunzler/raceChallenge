import name from '../../../../src/validators/file/name';

describe('file name validator', () => {
  describe('send a valid name', () => {
    it('return true', async () => {
      expect(await name('race_2021_02_03')).toBeTruthy();
    });
  });

  describe('send a invalid name', () => {
    it('throw error', async () => {
      try {
        await name('rice_2021_02_03');
      } catch (e) {
        expect(e.message).toBe('First word is not race');
      }
    });
  });
});

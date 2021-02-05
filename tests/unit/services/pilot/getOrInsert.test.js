import pilotService from '../../../../src/services/pilot.service';
import pilotRepository from '../../../../src/repository/pilot.repository';

describe('pilotService.getOrInsert', () => {
  describe('get existing pilot', () => {
    it('do not call insert', async () => {
      pilotRepository.get = jest.fn(() => [{}]);
      pilotRepository.insert = jest.fn(() => [{}]);
      
      await pilotService.getOrInsert({});

      expect(pilotRepository.insert).not.toBeCalled();
    });
  });

  describe('get a non existent pilot', () => {
    it('call insert', async () => {
      pilotRepository.get = jest.fn(() => []);
      pilotRepository.insert = jest.fn(() => [{}]);
      
      await pilotService.getOrInsert({});

      expect(pilotRepository.insert).toBeCalled();
    });
  });
});

import automobileService from '../../../../src/services/automobile.service';
import automobileRepository from '../../../../src/repository/automobile.repository';

describe('automobileService.getOrInsert', () => {
  describe('get existing automobile', () => {
    it('do not call insert', async () => {
      automobileRepository.get = jest.fn(() => [{}]);
      automobileRepository.insert = jest.fn(() => [{}]);
      
      await automobileService.getOrInsert({});

      expect(automobileRepository.insert).not.toBeCalled();
    });
  });

  describe('get a non existent automobile', () => {
    it('call insert', async () => {
      automobileRepository.get = jest.fn(() => []);
      automobileRepository.insert = jest.fn(() => [{}]);
      
      await automobileService.getOrInsert({});

      expect(automobileRepository.insert).toBeCalled();
    });
  });
});

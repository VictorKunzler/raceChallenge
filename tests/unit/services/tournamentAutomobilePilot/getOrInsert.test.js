import tournamentAutomobilePilotService from '../../../../src/services/tournamentAutomobilePilot.service';
import tournamentAutomobilePilotRepository from '../../../../src/repository/tournamentAutomobilePilot.repository';

describe('tournamentAutomobilePilotService.getOrInsert', () => {
  describe('get existing tournamentAutomobilePilot', () => {
    it('do not call insert', async () => {
      tournamentAutomobilePilotRepository.get = jest.fn(() => [{}]);
      tournamentAutomobilePilotRepository.insert = jest.fn(() => [{}]);
      
      await tournamentAutomobilePilotService.getOrInsert({});

      expect(tournamentAutomobilePilotRepository.insert).not.toBeCalled();
    });
  });

  describe('get a non existent tournamentAutomobilePilot', () => {
    it('call insert', async () => {
      tournamentAutomobilePilotRepository.get = jest.fn(() => []);
      tournamentAutomobilePilotRepository.insert = jest.fn(() => [{}]);
      
      await tournamentAutomobilePilotService.getOrInsert({});

      expect(tournamentAutomobilePilotRepository.insert).toBeCalled();
    });
  });
});

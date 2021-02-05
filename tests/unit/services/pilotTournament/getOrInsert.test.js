import pilotTournamentService from '../../../../src/services/pilotTournament.service';
import pilotTournamentRepository from '../../../../src/repository/pilotTournament.repository';

describe('pilotTournamentService.getOrInsert', () => {
  describe('get existing pilotTournament', () => {
    it('do not call insert', async () => {
      pilotTournamentRepository.get = jest.fn(() => [{}]);
      pilotTournamentRepository.insert = jest.fn(() => [{}]);
      
      await pilotTournamentService.getOrInsert({});

      expect(pilotTournamentRepository.insert).not.toBeCalled();
    });
  });

  describe('get a non existent pilotTournament', () => {
    it('call insert', async () => {
      pilotTournamentRepository.get = jest.fn(() => []);
      pilotTournamentRepository.insert = jest.fn(() => [{}]);
      
      await pilotTournamentService.getOrInsert({});

      expect(pilotTournamentRepository.insert).toBeCalled();
    });
  });
});

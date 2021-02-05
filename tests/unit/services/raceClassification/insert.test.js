import raceClassificationService from '../../../../src/services/raceClassification.service';
import raceClassificationRepository from '../../../../src/repository/raceClassification.repository';
import pilotTournamentService from '../../../../src/services/pilotTournament.service';

describe('raceClassificationService.insert', () => {
  it('call insert functions', async () => {
    pilotTournamentService.getOrInsert = jest.fn();
    raceClassificationRepository.insert = jest.fn();
    pilotTournamentService.updateAfterRace = jest.fn();
    
    await raceClassificationService.insert({ race: {}, data: {} });
    expect(pilotTournamentService.getOrInsert).toBeCalled();
  });
});

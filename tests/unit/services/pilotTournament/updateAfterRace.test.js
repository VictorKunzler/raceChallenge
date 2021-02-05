import pilotTournamentRepository from '../../../../src/repository/pilotTournament.repository';
import pilotTournamentService from '../../../../src/services/pilotTournament.service';

describe('pilotTournament.updateAfterRace', () => {
  it('calls pilotTournamentRepository.update', async () => {
    pilotTournamentRepository.update = jest.fn();
    await pilotTournamentService.updateAfterRace({ pilotTournament: {}, raceClassification: {} });

    expect(pilotTournamentRepository.update).toBeCalled();
  });
});
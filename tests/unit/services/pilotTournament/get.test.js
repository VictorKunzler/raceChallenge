import pilotTournamentService from '../../../../src/services/pilotTournament.service';
import pilotTournamentRepository from '../../../../src/repository/pilotTournament.repository';

describe('pilotTournamentService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(pilotTournamentRepository, 'get');
    await pilotTournamentService.get();
    expect(get).toBeCalled();
  });
});

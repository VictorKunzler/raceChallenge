import tournamentService from '../../../../src/services/tournament.service';
import tournamentRepository from '../../../../src/repository/tournament.repository';

describe('tournamentService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(tournamentRepository, 'get');
    await tournamentService.get();
    expect(get).toBeCalled();
  });
});

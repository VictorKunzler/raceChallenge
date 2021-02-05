import raceService from '../../../../src/services/race.service';
import raceRepository from '../../../../src/repository/race.repository';

describe('raceService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(raceRepository, 'get');
    await raceService.get();
    expect(get).toBeCalled();
  });
});

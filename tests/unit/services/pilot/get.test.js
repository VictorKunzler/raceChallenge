import pilotService from '../../../../src/services/pilot.service';
import pilotRepository from '../../../../src/repository/pilot.repository';

describe('pilotService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(pilotRepository, 'get');
    await pilotService.get();
    expect(get).toBeCalled();
  });
});

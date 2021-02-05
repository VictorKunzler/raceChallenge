import automobileService from '../../../../src/services/automobile.service';
import automobileRepository from '../../../../src/repository/automobile.repository';

describe('automobileService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(automobileRepository, 'get');
    await automobileService.get();
    expect(get).toBeCalled();
  });
});

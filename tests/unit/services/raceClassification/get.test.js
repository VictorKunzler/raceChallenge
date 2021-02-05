import raceClassificationService from '../../../../src/services/raceClassification.service';
import raceClassificationRepository from '../../../../src/repository/raceClassification.repository';

describe('raceClassificationService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(raceClassificationRepository, 'get');
    await raceClassificationService.get();
    expect(get).toBeCalled();
  });
});

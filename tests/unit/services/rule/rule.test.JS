import ruleService from '../../../../src/services/rule.service';
import ruleRepository from '../../../../src/repository/rule.repository';

describe('ruleService.getAll', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(ruleRepository, 'get');
    await ruleService.getAll();
    expect(get).toBeCalled();
  });
});

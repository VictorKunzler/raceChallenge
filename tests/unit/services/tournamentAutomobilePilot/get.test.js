import tournamentAutomobilePilotService from '../../../../src/services/tournamentAutomobilePilot.service';
import tournamentAutomobilePilotRepository from '../../../../src/repository/tournamentAutomobilePilot.repository';

describe('tournamentAutomobilePilotService.get', () => {
  it('call repository get', async () => {
    const get = jest.spyOn(tournamentAutomobilePilotRepository, 'get');
    await tournamentAutomobilePilotService.get();
    expect(get).toBeCalled();
  });
});

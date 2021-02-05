import automobileService from '../../../../src/services/automobile.service';
import pilotService from '../../../../src/services/pilot.service';
import raceClassificationService from '../../../../src/services/raceClassification.service';
import tournamentAutomobilePilotService from '../../../../src/services/tournamentAutomobilePilot.service';

describe('pilotService.inserPilotRace', () => {
  it('insert pilot classification', async () => {
    automobileService.getOrInsert = jest.fn(() => { return {} });
    pilotService.getOrInsert = jest.fn(() => { return {} });
    tournamentAutomobilePilotService.getOrInsert = jest.fn();
    raceClassificationService.insert = jest.fn();

    await pilotService.insertPilotRace({
      pilotData: {},
      race: {}
    });

    expect(automobileService.getOrInsert).toBeCalled();
    expect(pilotService.getOrInsert).toBeCalled();
    expect(tournamentAutomobilePilotService.getOrInsert).toBeCalled();
    expect(raceClassificationService.insert).toBeCalled();
  });
});

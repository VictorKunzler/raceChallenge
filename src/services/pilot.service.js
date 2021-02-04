import pilotRepository from '../repository/pilot.repository';
import automobileService from './automobile.service';
import raceClassificationService from './raceClassification.service';
import tournamentAutomobilePilotService from './tournamentAutomobilePilot.service';

const getOrInsert = async ({ name, transaction }) => {
  const pilot = await pilotRepository.get({ where: { name }, transaction });
  
  if (!pilot.length) return await pilotRepository.insert({ name }, transaction);
  
  return pilot[0];
};

const get = async (options) => {
  return await pilotRepository.get(options);
};

const insertPilotRace = async ({
  pilotData,
  race,
  transaction
}) => {
  const automobile = await automobileService.getOrInsert({ number: pilotData.Automobile, transaction });
  const pilot = await pilotService.getOrInsert({ name: pilotData.Name, transaction });

  await tournamentAutomobilePilotService.getOrInsert(
    {
      automobileId: automobile.id,
      tournamentId: race.tournamentId,
      pilotId: pilot.id,
      transaction
    }
  );

  return await raceClassificationService.insert(
    {
      race,
      data: {
        raceId: race.id,
        pilotId: pilot.id,
        automobileId: automobile.id,
        averageVelocity: pilotData.AverageVelocity,
        bestLap: pilotData.BestLap,
        diff: pilotData.Diff,
        gap: pilotData.Gap,
        name: pilotData.Name,
        startingGrid: pilotData.StartingGrid,
        timeBestLap: pilotData.TimeBestLap,
        totalLaps: pilotData.TotalLaps,
        totalTime: pilotData.TotalTime,
        fasterLap: pilotData.fasterLap,
        finished: pilotData.finished,
        position: pilotData.position,
        pole: pilotData.pole
      },
    },
    transaction
  );
};

const pilotService = {
  get,
  getOrInsert,
  insertPilotRace
};

export default pilotService;

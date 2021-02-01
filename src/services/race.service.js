import { sequelize } from "../../models";
import raceRepository from "../repository/race.repository";
import automobileService from "./automobile.service";
import pilotService from "./pilot.service";
import raceClassificationService from "./raceClassification.service";
import tournamentService from "./tournament.service";

const definePosition = (pilotA, pilotB) => {
  if (pilotA.TotalLaps > pilotB.TotalLaps) return -1;
  else if (pilotA.TotalLaps === pilotB.TotalLaps) {
    if (pilotA.TotalTime < pilotB.TotalTime) return -1;
    else if (pilotA.TotalTime === pilotB.TotalTime) {
      if (pilotA.AverageVelocity > pilotB.AverageVelocity) return -1;
    }
  }
};

const defineExtraInfo = data => {
  let bestLapTime = {
    index: null,
    time: null
  };

  let poleIndex;

  const totalLaps = data[0].TotalLaps;

  data.forEach((pilot, index) => {
    if (pilot.TotalLaps === totalLaps) {
      if (!bestLapTime.time || bestLapTime.time > pilot.TimeBestLap) {
        bestLapTime = {
          index,
          time: pilot.TimeBestLap
        }
      }

      if (!poleIndex || poleIndex > pilot.StartingGrid) poleIndex = index;
    }
  });

  return {
    totalLaps,
    bestLapTimeIndex: bestLapTime.index,
    poleIndex
  }
};

const getByDate = async ({ date, transaction }) => {
  return await raceRepository.get({ date }, transaction);
};

const insertRace = async ({
  date,
  year,
  data
}) => {
  data.sort(definePosition);

  const {
    totalLaps,
    bestLapTimeIndex,
    poleIndex
  } = defineExtraInfo(data);

  const transaction = await sequelize.transaction();

  try {
    const tournament = await tournamentService.getOrInsert({ year, transaction });

    let [race] = await getByDate({ date, transaction });
    if (race) throw new Error(301);

    race = await raceRepository.insert({ tournamentId: tournament.id, date }, transaction);

    for (let index = 0; index < data.length; index++) {
      const pilotData = data[index];

      const automobile = await automobileService.getOrInsert({ number: pilotData.Automobile, transaction });
      const pilot = await pilotService.getOrInsert({ name: pilotData.Name, transaction });

      await raceClassificationService.insert(
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
            fasterLap: bestLapTimeIndex === index,
            finished: totalLaps === pilotData.TotalLaps,
            position: index + 1,
            pole: poleIndex === index
          },
        },
        transaction
      );
    }

    await transaction.commit();

    return race;
  } catch (e) {
    await transaction.rollback();
    throw new Error(e);
  }
};

const raceService = {
  definePosition,
  defineExtraInfo,
  getByDate,
  insertRace
};

export default raceService;

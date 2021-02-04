import { sequelize } from '../../models';
import raceRepository from '../repository/race.repository';
import numberToTimeString from '../utils/numberToTimeString';
import automobileService from './automobile.service';
import pilotService from './pilot.service';
import raceClassificationService from './raceClassification.service';
import tournamentService from './tournament.service';

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

const get = async (options) => {
  return await raceRepository.get(options);
};

const getClassification = async (date) => {
  const [race] = await get({ where: { date } });
  if (race) return await raceClassificationService.get({ where: { raceId: race.id } });
};

const formatClassification = async (classifications) => {
  const classificationsReturn = [];

  for (let index = 0; index < classifications.length; index++) {
    const classification = classifications[index];
    const [automobile] = await automobileService.get({ where: { id: classification.automobileId } });
    const [pilot] = await pilotService.get({ where: { id: classification.pilotId } });

    classificationsReturn.push({
      automobile: automobile.number,
      name: pilot.name,
      position: classification.position,
      points: classification.points,
      total_laps: classification.totalLaps,
      total_time: numberToTimeString(classification.totalTime),
      best_lap: classification.bestLap,
      time_best_lap: numberToTimeString(classification.timeBestLap),
      diff: numberToTimeString(classification.diff),
      gap: numberToTimeString(classification.gap),
      starting_grid: classification.startingGrid,
      average_velocity: classification.averageVelocity
    });
  }

  return classificationsReturn;
};

const getPerYear = async (year) => {
  const [tournament] = await tournamentService.get({ where: { year } });
  const racesFormatted = [];

  if (tournament) {
    const races = await get({ where: { tournamentId: tournament.id } });

    for (let index = 0; index < races.length; index++) {
      const raceClassifications = await raceClassificationService.get({ where: { raceId: races[index].id } });
      const [year, mounth, day] = races[index].date.split('/');

      racesFormatted.push({
        race: races[index].date,
        laps: races[index].lap,
        automobiles: raceClassifications.length,
        pilots: raceClassifications.length,
        winner: races[index].winner,
        tournament_race_classification_url: `/tournaments/${year}/races/${mounth}/${day}/classification`
      });
    }
  }

  return racesFormatted;
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
    
    let [race] = await get({ where: { date }, transaction });
    if (race) throw new Error('Race already exists');

    race = await raceRepository.insert(
      {
        tournamentId: tournament.id,
        date,
        winner: data[0].Name,
        laps: data[0].TotalLaps
      },
      transaction
    );

    for (let index = 0; index < data.length; index++) {
      await pilotService.insertPilotRace({
        pilotData: {
          ...data[index],
          fasterLap: bestLapTimeIndex === index,
          finished: totalLaps === data[index].TotalLaps,
          position: index + 1,
          pole: poleIndex === index
        },
        race,
        transaction
      });
    }

    await transaction.commit();

    return race;
  } catch (e) {
    await transaction.rollback();
    throw new Error(e.message);
  }
};

const raceService = {
  definePosition,
  defineExtraInfo,
  formatClassification,
  get,
  getClassification,
  getPerYear,
  insertRace
};

export default raceService;

import raceClassificationRepository from '../repository/raceClassification.repository';
import pilotTournamentService from './pilotTournament.service';

const get = async (options) => {
  return await raceClassificationRepository.get(options);
};

const setPoints = data => {
  let points = 0;

  if (data.pole) points++;
  if (data.fasterLap) points++;

  switch (data.position) {
    case 1:
      points += 12;
      break;
      
    case 2:
      points += 10;
      break;
      
    case 3:
      points += 8;
      break;
      
    case 4:
      points += 6;
      break;
      
    case 5:
      points += 4;
      break;
      
    case 6:
      points += 2;
      break;
      
    default:
      points += 1;
      break;
  }

  return points;
};

const insert = async ({ race, data }, transaction) => {
  const points = data.finished ? setPoints(data) : 0;

  const pilotTournament = await pilotTournamentService.getOrInsert({
    pilotId: data.pilotId,
    tournamentId: race.tournamentId,
    transaction
  });

  const raceClassification = await raceClassificationRepository.insert({ ...data, points }, transaction);

  await pilotTournamentService.updateAfterRace({ raceClassification, pilotTournament, transaction });

  return raceClassification;
};

const raceClassificationService = {
  get,
  insert
};

export default raceClassificationService;

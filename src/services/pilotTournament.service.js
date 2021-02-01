import pilotTournamentRepository from "../repository/pilotTournament.repository";

const getOrInsert = async ({ pilotId, tournamentId, transaction }) => {
  const pilotTournament = await pilotTournamentRepository.get({ pilotId, tournamentId }, transaction);
  
  if (!pilotTournament.length) return await pilotTournamentRepository.insert(
    {
      pilotId,
      tournamentId
    },
    transaction
  );
  
  return pilotTournament[0];
};

const updateAfterRace = async ({ pilotTournament, raceClassification, transaction }) => {
  const points = (pilotTournament.points || 0) + raceClassification.points;
  const firstPlaces = (pilotTournament.points || 0) + (raceClassification.position === 1 ? 1 : 0);
  const secondPlaces = (pilotTournament.points || 0) + (raceClassification.position === 2 ? 1 : 0);
  const thirdPlaces = (pilotTournament.points || 0) + (raceClassification.position === 3 ? 1 : 0);

  return await pilotTournamentRepository.update(
    pilotTournament,
    {
      points,
      firstPlaces,
      secondPlaces,
      thirdPlaces
    },
    transaction
  );
};

const pilotTournamentService = {
  getOrInsert,
  updateAfterRace
};

export default pilotTournamentService;

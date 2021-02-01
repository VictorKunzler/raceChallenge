import tournamentRepository from "../repository/tournament.repository";

const getOrInsert = async ({ year, transaction }) => {
  const tournament = await tournamentRepository.get({ year }, transaction);
  
  if (!tournament.length) return await tournamentRepository.insert({ year }, transaction);
  
  return tournament[0];
};

const tournamentService = {
  getOrInsert
};

export default tournamentService;

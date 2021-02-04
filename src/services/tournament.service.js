import tournamentRepository from '../repository/tournament.repository';
import automobileService from './automobile.service';
import pilotService from './pilot.service';
import pilotTournamentService from './pilotTournament.service';
import raceService from './race.service';
import tournamentAutomobilePilotService from './tournamentAutomobilePilot.service';

const getFormatted = async ({ id, year }, allUrl) => {
  if (!id) {
    const [tournament] = await tournamentRepository.get({ where: { year } });

    if (!tournament) return {};

    id = tournament.id;
  }

  const races = await raceService.get({
    where: {
      tournamentId: id
    }
  });

  const pilots = await pilotTournamentService.get({
    where: {
      tournamentId: id
    }
  });

  const automobiles = await tournamentAutomobilePilotService.get({
    attributes: ['automobileId'],
    distinct: true,
    where: {
      tournamentId: id
    }
  });
  
  const tournament = {
    tournament: year,
    races: races.length,
    pilots: pilots.length,
    automobiles: automobiles.length
  }

  if (allUrl) {
    return {
      ...tournament,
      tournament_races_url: `/tournaments/${year}/races`,
      tournament_classification_url: `/tournaments/${year}/classification`,
      tournament_automobiles_url: `/tournaments/${year}/automobiles`,
      tournament_pilots_url: `/tournaments/${year}/pilots`
      };
  }

  return {
    ...tournament,
    tournament_url: `/tournaments/${year}`
  };
};

const get = async (options) => {
  return await tournamentRepository.get(options);
};

const getClassification = async (year) => {
  const [tournament] = await get({ where: { year } });
  
  const classification = [];
  if(tournament) {
    const pilots = await pilotTournamentService.get(
      {
        where: {
            tournamentId: tournament.id
        },
        order: [
          ['points', 'DESC'],
          ['firstPlaces', 'DESC'],
          ['secondPlaces', 'DESC'],
          ['thirdPlaces', 'DESC']
        ]
      }
    );

    for (let index = 0; index < pilots.length; index++) {
      const [pilot] = await pilotService.get({ where: { id: pilots[index].pilotId } });

      classification.push({
        name: pilot.name,
        points: pilots[index].points,
        position: index + 1
      });
    }
  }

  return classification;
};

const getOrInsert = async ({ year, transaction }) => {
  const tournament = await tournamentRepository.get({ where: { year }, transaction });
  
  if (!tournament.length) return await tournamentRepository.insert({ year }, transaction);
  
  return tournament[0];
};

const getAutomobiles = async year => {
  const [tournament] = await get({ where: { year } });
  const response = [];

  if (tournament) {
    const automobilesTournament = await tournamentAutomobilePilotService.get({
      attributes: ['automobileId'],
      where: {
        tournamentId: tournament.id
      }
    });

    const automobileIds = [];
    automobilesTournament.forEach(({ automobileId }) => {
      if (automobileIds.indexOf(automobileId) < 0) automobileIds.push(automobileId);
    });

    for (let index = 0; index < automobileIds.length; index++) {
      const [automobile] = await automobileService.get({ where: { id: automobileIds[index] } });

      const automobilePilots = await tournamentAutomobilePilotService.get({
        attributes: ['pilotId'],
        where: {
          automobileId: automobile.id,
          tournamentId: tournament.id
        }
      });

      const pilotsIds = [];
      automobilePilots.forEach(automobilePilot => {
        pilotsIds.push(automobilePilot.pilotId);
      });

      const pilots = await pilotService.get({
        attributes: ['name'],
        where: {
          id: pilotsIds
        }
      });

      const pilotNames = [];
      pilots.forEach(pilot => {
        pilotNames.push(pilot.name);
      });

      const automobileResponse = {
        automobile: automobile.number,
        pilots: pilotNames
      };

      response.push(automobileResponse);
    }
  }

  return response;
};

const getPilots = async year => {
  const [tournament] = await get({ where: { year } });
  const response = [];

  if (tournament) {
    const pilotsTournament = await pilotTournamentService.get({ where: { tournamentId: tournament.id } });

    for (let index = 0; index < pilotsTournament.length; index++) {
      const [pilot] = await pilotService.get({ where: { id: pilotsTournament[index].pilotId } });

      const pilotAutomobiles = await tournamentAutomobilePilotService.get({
        attributes: ['automobileId'],
        where: {
          pilotId: pilot.id,
          tournamentId: tournament.id
        }
      });

      const automobileIds = [];
      pilotAutomobiles.forEach(pilotAutomobile => {
        automobileIds.push(pilotAutomobile.automobileId);
      });

      const automobiles = await automobileService.get({
        attributes: ['number'],
        where: {
          id: automobileIds
        }
      });

      const automobileNumbers = [];
      automobiles.forEach(automobile => {
        automobileNumbers.push(automobile.number);
      });

      response.push({
        pilot: pilot.name,
        automobiles: automobileNumbers
      });
    }
  }

  return response;
};

const tournamentService = {
  get,
  getOrInsert,
  getFormatted,
  getClassification,
  getAutomobiles,
  getPilots
};

export default tournamentService;

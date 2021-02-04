import tournamentService from '../services/tournament.service';

const get = async (req, res) => {
  try {
    const year = req.params.year;

    const tournament = await tournamentService.getFormatted({ year }, true);

    res.send(tournament);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const getAll = async (req, res) => {
  try {
    const tournaments = await tournamentService.get();

    let response = [];
    for (let index = 0; index < tournaments.length; index++) {
      response.push(await tournamentService.getFormatted(tournaments[index]));
    }

    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const getClassification = async (req, res) => {
  try {
    const tournaments = await tournamentService.getClassification(req.params.year);
    res.send(tournaments);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const getAutomobiles = async (req, res) => {
  try {
    const automobiles = await tournamentService.getAutomobiles(req.params.year);
    res.send(automobiles);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const getPilots = async (req, res) => {
  try {
    const pilots = await tournamentService.getPilots(req.params.year);
    res.send(pilots);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  };
};

const tournamentController = {
  get,
  getAll,
  getClassification,
  getAutomobiles,
  getPilots
};

export default tournamentController;

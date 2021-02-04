import raceService from '../services/race.service';

const getPerYear = async (req, res) => {
  const { year } = req.params;

  try {
    const races = await raceService.getPerYear(year);
    res.send(races);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  };
};

const getClassification = async (req, res) => {
  try {
    const date = `${req.params.year}/${req.params.mounth}/${req.params.day}`
    const races = await raceService.getClassification(date);

    let response = [];
    if (races) {
      races.sort((raceA, raceB) => (raceA.position < raceB.position) ? -1 : 0);
      response = await raceService.formatClassification(races);
    }

    res.send(response);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  };
};

const raceController = {
  getPerYear,
  getClassification
};

export default raceController;

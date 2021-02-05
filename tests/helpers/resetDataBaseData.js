import '@babel/polyfill';

import {
  TournamentAutomobilePilot,
  PilotTournament,
  RaceClassification,
  Race,
  Automobile,
  Pilot,
  Tournament,
  sequelize
} from '../../models';

const resetDataBaseData = async () => {
  const transaction = await sequelize.transaction();

  try {
    await TournamentAutomobilePilot.destroy({
      where: {},
      transaction,
    });

    await PilotTournament.destroy({
      where: {},
      transaction,
    });

    await RaceClassification.destroy({
      where: {},
      transaction,
    });

    await Race.destroy({
      where: {},
      transaction,
    });

    await Automobile.destroy({
      where: {},
      transaction,
    });

    await Pilot.destroy({
      where: {},
      transaction,
    });

    await Tournament.destroy({
      where: {},
      transaction,
    });

    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    throw new Error(e);
  }
};

export default resetDataBaseData;

import Sequelize from 'sequelize';
import config from '../../config/config.json';

export default function createDbConnection(server) {
  const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

  const {
    username,
    password,
    database,
    host,
    dialect
  } = config[env];

  const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log(`Connect to ${database} database.`);
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
      server.close();
    });
};

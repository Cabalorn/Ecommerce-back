const Sequelize = require('sequelize');
const config = require('./config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect
});

sequelize.authenticate()
  .then(() => console.log('Conexão bem-sucedida.'))
  .catch((err) => console.error('Não foi possível conectar-se ao banco de dados:', err));

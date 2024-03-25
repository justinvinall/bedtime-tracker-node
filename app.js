const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const config = require('./config');
const initModels = require('./models/init-models');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
});

const models = initModels(sequelize);

// Pass the models object to the route files
const bedtimeRouter = require('./routes/bedtimes')(models);
app.use('/api/bedtimes', bedtimeRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

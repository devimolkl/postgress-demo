const { Sequelize } = require('sequelize');
const { Movie } = require('./model');
const moment = require('moment');
const express = require('express');
const apiRoutes = require('./server/apiRoutes');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes());

app.listen(3000, () => {
    console.log('server is listening to port3000');

})






'use strict';

let config = require('../config');
let Sequelize = require('sequelize');

let sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        port: config.database.port,
        dialectOptions: {
            multipleStatements: true
        }
    }
);

var Warrior = sequelize.import('../models/warriorModel.js');

module.exports.sequelize = sequelize;
module.exports.Warrior = Warrior;
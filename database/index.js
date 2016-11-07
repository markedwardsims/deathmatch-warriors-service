import * as config from '../config';
import Sequelize from 'sequelize';

export let sequelize = new Sequelize(
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

export let WarriorModel = sequelize.import('../models/warriorModel.js');

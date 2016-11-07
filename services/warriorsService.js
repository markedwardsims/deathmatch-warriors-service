'use strict';

let Warrior = require('../database').Warrior;

class WarriorsService {

    getAllWarriors() {
        return Warrior.findAll();
    }

    getWarriorById(id) {
        return Warrior.findOne({
            where: {
                id: id
            }
        });
    }
}

module.exports = WarriorsService;
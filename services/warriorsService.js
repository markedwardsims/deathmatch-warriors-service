import WarriorModel from '../database';

class WarriorsService {

    getAllWarriors() {
        return WarriorModel.findAll();
    }

    getWarriorById(id) {
        return WarriorModel.findOne({
            where: {
                id: id
            }
        });
    }
}

module.exports = WarriorsService;
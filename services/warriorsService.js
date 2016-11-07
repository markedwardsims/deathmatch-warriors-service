import {WarriorModel} from '../database';

export default class WarriorsService {

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

    updateWarrior(id, req) {
        return WarriorModel.findOne({
            where: {
                id: id
            }
        })
        .then((warrior) => {
            warrior.update(req);
            return warrior;
        })
    }
}

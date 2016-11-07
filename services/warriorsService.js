import {WarriorModel} from '../database';

let getWarriorById = (id) => {
    return WarriorModel.findOne({
        where: {
            id: id
        }
    });
}

export default class WarriorsService {

    getAllWarriors() {
        return WarriorModel.findAll();
    }

    getWarriorById(id) {
        return getWarriorById(id);
    }

    updateWarrior(id, req) {
        return getWarriorById(id)
            .then((warrior) => {
                warrior.update(req);
                return warrior;
            });
    }
}

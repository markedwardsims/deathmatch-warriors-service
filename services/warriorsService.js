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
}

import WarriorsService from '../services/warriorsService.js';

let warriorsService = new WarriorsService();

export default class WarriorsController {
    getAll(req, res, next) {
        warriorsService.getAllWarriors()
            .then((warriors) => {
                res.send(warriors);
                next();
            })
            .catch((e) => {
                req.server.emit('uncaughtException', req, res, req.route, e);
                next(false);
            });
    }

    get(req, res, next) {
        warriorsService.getWarriorById(req.params.id)
            .then((warrior) => {
                res.send(warrior);
                next();
            })
            .catch((e) => {
                req.server.emit('uncaughtException', req, res, req.route, e);
                next(false);
            });
    }
}

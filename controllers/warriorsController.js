import WarriorsService from '../services/warriorsService.js';
import {BadRequestError} from './controllerErrors';

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

    update(req, res, next) {
        console.log(req);

        if (!req.params.id) {
            return next(new BadRequestError('The warrior id is required.'));
        }

        if (!req.body) {
            return next(new BadRequestError('Missing warrior information.'));
        }

        warriorsService.updateWarrior(req.params.id, req.body)
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

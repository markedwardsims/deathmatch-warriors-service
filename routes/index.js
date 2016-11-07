import WarriorsController from '../controllers/warriorsController.js';

let warriorsController = new WarriorsController();

export default (server) => {
    server.get({path: '/warriors'}, warriorsController.getAll);
    server.get({path: '/warriors/:id'}, warriorsController.get);
}
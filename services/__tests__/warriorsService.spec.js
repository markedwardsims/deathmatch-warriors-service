import { expect } from 'chai';
import Promise from 'bluebird';

import WarriorsService, {__RewireAPI__ as WarriorsServiceRewire} from '../warriorsService.js';

describe('the Warriors Service', () => {

    let warriorsService;

    let mockWarrior = {};
    let mockAllWarriors = [];

    let mockWarriorModel = {
        findOne: (id) => {
            return new Promise((resolve, reject) => {
                resolve(mockWarrior);
            });
        },
        findAll: () => {
            return new Promise((resolve, reject) => {
                resolve(mockAllWarriors);
            });
        }
    };

    before(() => {
        WarriorsServiceRewire.__Rewire__('WarriorModel', mockWarriorModel);
        warriorsService = new WarriorsService();
    });

    after(() => {
        warriorsService = null;
        WarriorsServiceRewire.__ResetDependency__('WarriorModel');
    });

    it('should get all warriors', (done) => {
        warriorsService.getAllWarriors().then((allWarriors) => {
            expect(allWarriors).to.eql(mockAllWarriors);
            done();
        });
    });

    it('should get a single warrior by id', (done) => {
        warriorsService.getWarriorById().then((warrior) => {
            expect(warrior).to.eql(mockWarrior);
            done();
        });
    });

    it('should update a warrior with proper id');


});
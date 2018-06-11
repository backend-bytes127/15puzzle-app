import {AstarPuzzle} from './a-star';

describe('Astar', () => {

    beforeEach( () => {
    });

    it('test a star  move with dummy data' , () => {
        const game = [{value: 4, color: 'blue'},
        {value: 0, color: 'blue'},
        {value: 6, color: 'blue'},
        {value: 2, color: 'blue'},
        {value: 8, color: 'blue'},
        {value: 1, color: 'blue'},
        {value: 10, color: 'blue'},
        {value: 3, color: 'blue'},
        {value: 12, color: 'blue'},
        {value: 5, color: 'blue'},
        {value: 14, color: 'blue'},
        {value: 7, color: 'blue'},
        {value: null, color: 'red'},
        {value: 9, color: 'blue'},
        {value: 13, color: 'blue'},
        {value: 11, color: 'blue'}
        ];
        const goalState = [];
        for (let i = 0; i < 16; i++ ) {
            if (i === 15) {
                goalState.push({value: null, color: 'yellow'});
            }
            goalState.push({value: i, color: 'blue'});
        }
        const astar = new AstarPuzzle(game , 6);
        let finalState = [];
        const steps = astar.evaluate();
        for (const step of steps) {
            finalState = step;
        }
        for (let i = 0; i < 16; i++) {
            expect(finalState[i].value).toEqual(goalState[i].value);
        }
    });

});

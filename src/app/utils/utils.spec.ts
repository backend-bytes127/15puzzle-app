import {TestBed, async} from '@angular/core/testing';
import Utils from './utils';

describe('Utils', () => {
    let utils: Utils;
    beforeEach(() => {
       utils = new Utils();
      });

    it('set empty node index', () => {
        utils.setEmptyNodeIndex(1);
        expect(utils.getEmptyNodeIndex()).toEqual(1);
    });

    it('get size of the board', () => {
        utils.setSizeOfBoard(4, 4);
        expect(utils.getSizeOfBoard()).toEqual({width: 4, height: 4});
    });

    it('get index from coordinates', () => {
        utils.setSizeOfBoard(4, 4);
        expect(utils.getIndex(1, 2)).toEqual(6);
    });

    it('get coordinates from index', () => {
        utils.setSizeOfBoard(4, 4);
        expect(utils.getCoordinates(7, 4)).toEqual({row: 1, column: 3});
    });

    it('get next move', () => {
        const game = [
            {value: 0},
            {value: 1},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: null},
            {value: 7},
            {value: 8},
            {value: 9},
            {value: 6},
            {value: 10},
            {value: 12},
            {value: 13},
            {value: 14},
            {value: 11}
        ];

        utils.setGame(game);
        utils.setSizeOfBoard(4, 4);
        utils.setEmptyNodeIndex(6);
        utils.setNextMove(2);
        let new_game = utils.getGame();
        expect(new_game[2].value).toEqual(null);
        expect(new_game[6].value).toEqual(2);

        utils.setNextMove(1);
        new_game = utils.getGame();
        expect(new_game[1].value).toEqual(null);
        expect(new_game[2].value).toEqual(1);
    });
});

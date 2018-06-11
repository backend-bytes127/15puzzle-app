import {Heuristic} from './heuristics/heuristic';
import Utils from '../utils/utils';
import {ManhattanDistancePuzzle} from './heuristics/manhattan-distance';

interface Node {
    position?: number;
    heuristic?: Heuristic<Node>;
    getHeuristic(depth: number): number;
}

export class PuzzleGameNode implements Node {
    private m_emptyIndexPosition: number;
    private m_previousEmptyPosition: number;
    private m_heuristic: ManhattanDistancePuzzle<Node>;
    private game: [{value: number, color: string}];
    private goalGame: [{value: number}];
    private _width: number;
    private _height: number;
    private _utils;

    constructor(game) {
        this.m_heuristic = new ManhattanDistancePuzzle();
        this.game = game;
        this._width = Math.sqrt(game.length);
        this._height = Math.sqrt(game.length);
        this._utils = new Utils();
        this.setEmptyIndexPosition();
    }

    getMoves() {

      const params =   this._utils.getCoordinates(this.m_emptyIndexPosition, this._width);
      const move = {LEFT: false, RIGHT: false, UP: false, DOWN: false};
        if ((params.column - 1 ) >= 0 &&
           (params.column - 1 !== this.m_previousEmptyPosition )) {
                move.LEFT = true;
        }

        if ((params.column + 1) < this._width &&
        ((params.column + 1) !== this.m_previousEmptyPosition)) {
                move.RIGHT = true;
        }

        if ((params.row - 1) >= 0 &&
        ((params.row - 1) !== this.m_previousEmptyPosition)) {
                move.UP = true;
        }

        if ((params.row + 1) < this._height &&
        ((params.row + 1) !== this.m_previousEmptyPosition)) {
                move.DOWN = true;
        }

        this.m_previousEmptyPosition = this.m_emptyIndexPosition;
        return move;
    }

    getGame() {
        return [...this.game];
    }

    getWidth() {
        return this._width;
    }

    setEmptyIndexPosition() {
        for( let i = 0; i < this.game.length; i++) {
            if (this.game[i].value === null) {
                this.m_emptyIndexPosition = i;
                this.game[i].color = 'yellow';
            }
        }
    }

    getEmptyIndexPosition() {
        return this.m_emptyIndexPosition;
    }

    getHeuristic(depth: number): number {
        this.m_heuristic.setWidthOfPuzzle(this._width);
     const error = this.m_heuristic.evaluate_cost_function(this.game);
        if (error === 0) {
            return error;
        } else {
            return error + depth;
        }
    }
}

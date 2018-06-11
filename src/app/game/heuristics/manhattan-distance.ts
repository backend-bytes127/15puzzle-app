import {Heuristic} from './heuristic';
import Utils from '../../utils/utils';

export class ManhattanDistancePuzzle<T> implements Heuristic<T> {
    width: number;
    private _utils: Utils;
    constructor() {
        this._utils = new Utils();
    }

    setWidthOfPuzzle(width: number) {
        this.width = width;
    }

    evaluate_cost_function(source): number {
        let cost = 0;
        for (let i = 0; i < (this.width * this.width); i++) {
            if (source[i].value === null) {
                continue;
            }
            const sourceParams = this._utils.getCoordinates(source[i].value, this.width);
            const goalParams = this._utils.getCoordinates(i, this.width);
            cost = cost + Math.abs(goalParams.column - sourceParams.column)
                        + Math.abs(goalParams.row - sourceParams.row);
        }

    return cost;
    }
}

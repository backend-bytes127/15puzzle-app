import {PuzzleGameNode} from './node';

export class AstarPuzzle {

    _node: PuzzleGameNode;
    children =  [];
    emptyPosition: number;
    childData;
    constructor(node, position) {
        this._node = new PuzzleGameNode(node);
    }

    /*
    For every node the manhattan distance heuristic is calculated.
    The node with the smallest heuristic is selected for the next move.
    The node makes sure that the child node is not equal to the parent 
    configuation. The loop stop once the error is 0 or the system
    reaches the goal state.
    */

    evaluate() {
        const steps = [];
        let depth = 0;
        let error = this._node.getHeuristic(depth);
        let previousMove = '';
        depth = 1;
        while (error !== 0) {
           const moves = this._node.getMoves();
           if (moves.UP) {
               this.moveUpHandler();
           }

           if (moves.DOWN) {
               this.moveDownHandler();
           }

           if (moves.LEFT) {
               this.moveLeftHandler();
           }

           if (moves.RIGHT) {
               this.moveRightHandler();
           }
           let currentError = 16;
           for (const c of this.children) {
               const childNode = new PuzzleGameNode(c.data);
               const minError = childNode.getHeuristic(depth);
               if (minError <= currentError) {
                   currentError = minError;
                   this.childData = c.data ;
                   previousMove = c.MOVE;
               }
           }
           this._node = new PuzzleGameNode(this.childData);
           steps.push(this.childData);
           this.children = [];
           depth++;
           error = currentError;
        }
       // return this._node.getGame();
       return steps;
    }

    swap(offset) {
        const g = this._node.getGame();
        const emptyIndexPosition = this._node.getEmptyIndexPosition();
        const tempNode = g[emptyIndexPosition + offset];
        g[emptyIndexPosition + offset] = g[emptyIndexPosition];
        g[emptyIndexPosition] = tempNode;
        return g;
    }

    moveUpHandler() {
        const offset = -(this._node.getWidth());
        this.children.push({'MOVE' : 'UP', 'data' :  this.swap(offset)});
    }

    moveDownHandler() {
        const offset = (this._node.getWidth());
        this.children.push({'MOVE': 'DOWN', 'data' : this.swap(offset)});
    }

    moveLeftHandler() {
        const offset = -1;
        this.children.push({'MOVE': 'LEFT', 'data' : this.swap(offset)});
    }

    moveRightHandler() {
        const offset = +1;
        this.children.push({'MOVE': 'RIGHT', 'data' : this.swap(offset)});
    }
}

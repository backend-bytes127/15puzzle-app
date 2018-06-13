import {IMOVE} from './model';
import {IGAME} from './model';

class Utils {
    private moves: IMOVE;
    private emptyNodeIndex: number;
    private width: number;
    private height: number;
    game: IGAME[];
    constructor() {
    }

    setEmptyNodeIndex(index: number) {
        this.emptyNodeIndex = index;
    }

    getEmptyNodeIndex() {
        return this.emptyNodeIndex;
    }

    setGame(game: any) {
        this.game = game;
    }

    getGame() {
        return this.game;
    }

    getCoordinates(index: number, width: number): {row: number, column: number} {
        const row: number = Math.floor(index / width);
        const column: number = index % width;
        return  {row: row, column: column};
    }

    getIndex(row: number, column: number): number {
        return column + (row * this.width);
    }

    setSizeOfBoard(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getSizeOfBoard() {
        return  {width: this.width, height: this.height};
    }

    swap(firstIndex, secondIndex) {
        const tempValue = this.game[firstIndex].value;
        const g = [...this.game];
        const gameFirst = {...g[firstIndex]};
        const gameSecond = {...g[secondIndex]};
        gameFirst.value = gameSecond.value;
        gameFirst.color = 'yellow';
        gameSecond.value = tempValue;
        gameSecond.color = 'blue';
        g[firstIndex] = gameFirst;
        g[secondIndex] = gameSecond;
        return g;
       }

       shuffle() {
        for (let i = this.game.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.game[i], this.game[j]] = [this.game[j], this.game[i]];
        }
        for (let i = 0; i < this.game.length - 1; i++) {
          if (this.game[i].value === null) {
            this.setEmptyNodeIndex(i);
          }
        }
    }

    setNextMove(currentNodeIndex: number) {
        // find if there is an empty node with respect to the current
        // node
        // swap values with the empty node
        const emptyNode = this.getCoordinates(this.emptyNodeIndex, this.width);
        const node = this.getCoordinates(currentNodeIndex, this.width);
        if (emptyNode.row === node.row) {
            if (node.column === emptyNode.column - 1) {
                const firstIndex = (this.getIndex(node.row, node.column));
                const secondIndex = (this.getIndex(emptyNode.row, emptyNode.column));
                this.game = this.swap(firstIndex, secondIndex);
                this.emptyNodeIndex = firstIndex;
            } else if (node.column === emptyNode.column + 1) {
                const firstIndex = (this.getIndex(node.row, node.column));
                const secondIndex = (this.getIndex(emptyNode.row, emptyNode.column));
                this.game = this.swap(firstIndex, secondIndex);
                this.emptyNodeIndex = firstIndex;
            }
        }
        if (emptyNode.column === node.column) {
            if (node.row === emptyNode.row - 1) {
                const firstIndex = (this.getIndex(node.row, node.column));
                const secondIndex = (this.getIndex(emptyNode.row, emptyNode.column));
                this.game = this.swap(firstIndex, secondIndex);
                this.emptyNodeIndex = firstIndex;
            } else if (node.row === emptyNode.row + 1) {
                const firstIndex = (this.getIndex(node.row, node.column));
                const secondIndex = (this.getIndex(emptyNode.row, emptyNode.column));
                this.game = this.swap(firstIndex, secondIndex);
                this.emptyNodeIndex = firstIndex;
            }
        }
    }

    setMoves(row: number, column: number,
        width: number, height: number) {
            const move: IMOVE = {
                LEFT: (column - 1) >= 0 ?  true : false,
                RIGHT: (column + 1) < width ? true : false,
                UP :  (row - 1) >= 0 ? true : false,
                DOWN: (row + 1) < height ? true : false
            };
        }

    getMoves(): any {
        return this.moves;
    }

}

export default Utils;

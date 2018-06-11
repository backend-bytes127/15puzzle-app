import { Component, OnInit } from '@angular/core';

import Utils from './utils/utils';
import {AstarPuzzle} from './game/a-star';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  game = [];
  goalState = [];
  private _utils: Utils;
  boardSize = 4;
  puzzleSolved =  false;
  gridColumn = 'repeat(4,100px)';
  gridRow = '100px 100px 100px 100px';
  automation = false;
  steps; number;

  constructor() {}

  ngOnInit() {

    this.onBoardSizeChangeHandler(4);
  }

  checkStatusOfGame() {
    for (let i = 0; i < 16; i++) {
      if (this.game[i].value === this.goalState[i].value) {
        this.puzzleSolved = true;
      } else {
        this.puzzleSolved = false;
      }
  }
  }

  setUtil(emptyIndex, size) {
    this._utils = new Utils();
    this._utils.setEmptyNodeIndex(emptyIndex);
    this._utils.setSizeOfBoard(size, size);
    this._utils.setGame(this.game);
    this._utils.shuffle();
  }

  onBoardSizeChangeHandler(event) {
    this.boardSize = event;
    this.gridColumn = `repeat(${event}, 100px)`;
    let gridRow = '';
    this.game = [];
    this.goalState = [];
    for (let i = 0; i < event; i++) {
      gridRow = gridRow + '100px' + ' ';
    }

    for (let i = 0; i < event * event; i++) {
      if (i === (event * event) - 1) {
        this.game.push({value: null, color: 'yellow'});
        this.goalState.push({value: null, color: 'yellow'});
      } else {
        this.game.push({value: i, color: 'blue'});
        this.goalState.push({value: i, color: 'blue'});
      }
    }
    this.gridRow = gridRow;
    this.setUtil(((event * event) - 1), event);
  }


  onElementClickHandler(game, index) {
    this._utils.setNextMove(index);
    this.game = this._utils.getGame();
    this.checkStatusOfGame();
  }

  onAutomate() {
  let emptyIndex;
  this.createDummyDateForAutomation();
  for (let i = 0; i < this.game.length; i++) {
    if (this.game[i].value === null) {
      emptyIndex = i;
    }
  }
    const astar = new AstarPuzzle(this.game, emptyIndex );
    const steps =  (astar.evaluate());
    this.steps = steps;
    for (const step of steps) {
          this.game = step;
      }
      this.automation = true;
      this.checkStatusOfGame();
 }

  onClick() {
  this.onBoardSizeChangeHandler(this.boardSize);
  this.checkStatusOfGame();
  this.automation = false;
}

createDummyDateForAutomation() {
  this.game = [{value: 4, color: 'blue'},
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
              {value: null, color: 'yellow'},
              {value: 9, color: 'blue'},
              {value: 13, color: 'blue'},
              {value: 11, color: 'blue'}
              ];

              this.boardSize = 4;
              this.gridColumn = `repeat(4, 100px)`;
              this.gridRow = '100px 100px 100px 100px';
              this.goalState = [];
              for (let i = 0; i < 16; i++) {
                if (i === 15) {
                  this.goalState.push({value: null});
                } else {
                  this.goalState.push({value: i});
                }

}


}



}


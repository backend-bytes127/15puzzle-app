import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.css']
})
export class GameModeComponent implements OnInit {
  modes: number[];
  @Output() boardChange =  new EventEmitter<number>();
  showTileInput = false;
  constructor() { }

  ngOnInit() {
  }

  isSquare(val: number): boolean {
    return (val > 0 && Math.sqrt(val) % 1 === 0);
  }

  onTileChangeHandler(e) {
    const val = (e.target.value);
    if (this.isSquare(val)) {
      this.boardChange.emit(Math.sqrt(val));
      this.showTileInput = false;
    } else {
      this.showTileInput = true;
    }
  }

}

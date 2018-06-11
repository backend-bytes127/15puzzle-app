# 15 Puzzle App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
red in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


# Description

The code is organized as follows
Inside the app folder there are three sub-folders, utils, game-mode and game.
Game mode is a template for selecting the number of tiles. Based on this input, the size of the grid will change. 

The game folder consists of the A*Star implementation based on the manhattan distance heuristic. Node is the grid which consists of a heuristic. 

app.component is the root of the GUI. The tests are written inside utils/utils.spec.ts and game/game.spec.ts
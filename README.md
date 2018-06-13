# 15 Puzzle App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to this [link][link app]  `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
red in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Description

The code is organized as follows
Inside the app folder there are three sub-folders, utils, game-mode and game.
Game mode is a template for selecting the number of tiles. Based on this input, the size of the grid will change.

The game folder consists of the A*Star implementation based on the manhattan distance heuristic. Node is the grid which consists of a heuristic.

app.component is the root of the GUI. The tests are written inside utils/utils.spec.ts and game/game.spec.ts

Link to git repository 
https://github.com/nrj127/15puzzle-app

## Steps

1. Starting the game: When the app launches, the default mode is the non-automatic mode. You can click the restart button to shuffle the game.

1. Change the grid by entering the number of tiles. The number of tiles whould be a whole square number.

1. You can move the tile in up, dowm, left or right direction. However only when there is an empty cell in the neighbourhood.

1. A demo data is read in for the auomated mode. In this mode, the A* star algorithm is implemented to automatically reach the goal state. This is tested only with a grid size of 4x4. This can however be adjusted.


[link app]: http://localhost:4200

## Possible imporvements

1. The automated mode can be improved using the A* IDP algorithm.
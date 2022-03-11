// https://www.youtube.com/watch?v=wOVEe9eawXc&t=1136s

import Grid from "./Grid.js"
import Tile from "./Tile.js"

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)

function setupInput() {
    window.addEventListener("keydown", handleInput, {once:true})
}

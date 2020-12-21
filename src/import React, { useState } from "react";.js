import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
Properties:
- nrows: number of rows of board
- ncols: number of cols of board
- chanceLightStartsOn: float, chance any cell is lit at start of game

state:
board: array-of-arrays of true/false
.  .  .
0  0  . 
.  .  .
(where . is off, and 0 is on)
this would be [[f,f,f], [t,t,f], [f,f,f]]

This should render an html table of individual <Cell /> components

This doesn't handle clicks, clicks are on individual cells
 *
 **/

 function Board(nrows=5, ncols=5, chanceLightStartsOn=0.25) {
   const [board, setBoard] = useState(createBoard());
   
   /* create a board nrows high/ncols wide, each cell randomly lit or unlit **/
   function createBoard() {
     let initialBoard = [];
     //create array of arrays of true/false values
     for(let y = 0; y < nrows; y++) {
       row.push(Math.random() < chanceLightStartsOn)
     }
     initialBoard.push(row);
   }
   return initialBoard;
 }

 function hasWon() {
   //check the board in state to determine whether the player has won
   return board.every(row => row.every(cell => !cell));
 }
 /* flip cells around a given cell */
 function flipCellsAround(coord) {
   setBoard(oldBoard => {
     console.log(coord)
     const [y, x] = coord.split("-"),map(Number);
   })
 }

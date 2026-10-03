let score = 0;
const boardWidth = 360;
const boardHeight = 640;
let board = document.getElementById("board");   //get board element from index.html

let context = board.getContext("2d")            //An HTML canvas is just a blank container. To draw shapes, images, or text on it, you ask the canvas for its 2D rendering context object.

board.width = boardWidth;
board.height = boardHeight;

let dayImg = new Image();


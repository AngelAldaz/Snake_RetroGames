// DOM
const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);

// Canvas
let blockSize = 20;
let rows = 32;
let cols = 16;
let board;
let context;

// Snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// Snake speed
let velocityX = 0;
let velocityY = 0;
let direction;

// Food
let foodX;
let foodY;

// Funcion princial
window.onload = function () {
  // Darle tamaño al canvas
  board = $("canvas");
  board.height = rows * blockSize;
  board.width = cols * blockSize;

  // Crear el contexto
  context = board.getContext("2d");

  // Poner comida
  placeFood();

  // Movimiento
  document.addEventListener("keyup", changeDirection);

  // update();
  setInterval(update, 750 / 10);
};

// Funciom para actualizar
function update() {
  // Reiniciar el board
  context.clearRect(0, 0, board.width, board.height);

  // Dibujar snake
  context.fillStyle = "green";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  // Dibujar food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

// Funcion para cambiar la direccion
function changeDirection(e) {
  //Mover snake
  if (e.code == "ArrowUp" && direction != "down") {
    direction = "up";
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && direction != "up") {
    direction = "down";
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && direction != "right") {
    direction = "left";
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && direction != "left") {
    direction = "right";
    velocityX = 1;
    velocityY = 0;
  }
}

// Funcion para generar posicion aleatoria de food
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

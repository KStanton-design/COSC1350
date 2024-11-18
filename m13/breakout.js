/* ..:: B R E A K O U T   G A M E ::..
 *
 * breakout.js
 * Author: Kathy Stanton
 * Date: 11/16/24
 * Project for COSC 1350
 *
 */

// get the canvas element from the DOM.
const canvas = document.getElementById("myCanvas");


const ctx = canvas.getContext("2d");

//drawing the ball 
canvas.width = 900;
canvas.height = 600;
let ballRadius = 15, xPos = canvas.width / 2, yPos = canvas.height / 2;


//Move the ball
let xMoveDist = 10, yMoveDist = -10;

//draw the ball on the canvas
ballRender=()=>{
  ctx.beginPath();
  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#02497a";
  ctx.fill();
  ctx.closePath();
}

// Paddle properties
const paddleHeight = 15;
const paddleWidth = 100;
let xPaddle = (canvas.width - paddleWidth) / 2;
const yPaddle = canvas.height - paddleHeight;
let moveLeft = false;
let moveRight = false;

// Draw Paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  ctx.fillStyle = "#02497a";
  ctx.fill();
  ctx.closePath();
}

// Draw Game
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  drawPaddle();
}

{
requestAnimationFrame(draw);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  drawPaddle();

  //move the ball
  xPos += xMoveDist;
  yPos += yMoveDist;

  //bounce off left and right walls
  if (xPos + ballRadius > canvas.width || xPos - ballRadius < 0){
    xMoveDist = -xMoveDist;// Reverse horizontal direction
  }
    
  //bounce off top wall
    if (yPos - ballRadius < 0) {
      yMoveDist = -yMoveDist; // Reverse vertical direction
    }

    //bounce off bottom wall
    if (yPos + ballRadius > canvas.height) {
      yMoveDist = -yMoveDist; // Reverse vertical direction
    }
    // Paddle movement
    if (moveRight && xPaddle < canvas.width - paddleWidth) {
      xPaddle += 5; // Move paddle to the right
  }
  if (moveLeft && xPaddle > 0) {
      xPaddle -= 5; // Move paddle to the left
  }


};
//wait for the key pressed
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
    if (event.key === "ArrowRight") {
        moveRight = true;
    } else if (event.key === "ArrowLeft") {
        moveLeft = true;
    }
}

function keyUpHandler(event) {
    if (event.key === "ArrowRight") {
        moveRight = false;
    } else if (event.key === "ArrowLeft") {
        moveLeft = false;
    }
}


//ball speed - the higher the number the slower the ball will travel
const refreshRate = 40;
const intervalID = setInterval(draw, refreshRate);



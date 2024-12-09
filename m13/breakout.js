/* ..:: B R E A K O U T   G A M E ::..
 *
 * breakout.js
 * Author: Kathy Stanton
 * Date: 11/16/24
 * Project for COSC 1350
 *
 */



// Get the canvas element
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 900;
canvas.height = 600;

// Ball properties
let ballRadius = 15;
let xPos = canvas.width / 2;
let yPos = canvas.height / 2;
let xMoveDist = (Math.random() * 3 + 3) * (Math.random() < 0.5 ? 1 : -1);
let yMoveDist = -Math.random() * 3 - 3;

// Paddle properties
const paddleHeight = 15;
const paddleWidth = 100;
let xPaddle = (canvas.width - paddleWidth) / 2;
let yPaddle = canvas.height - paddleHeight;
let moveLeft = false;
let moveRight = false;

// Brick configuration
const brickRows = 4;
const brickColumns = 6;
const brickWidth = 125;
const brickHeight = 20;
const brickPadding = 10;
const brickTopOffset = 40;
const brickLeftOffset = 40;

// Create bricks
const bricks = [];
for (let row = 0; row < brickRows; row++) {
  bricks[row] = [];
  for (let col = 0; col < brickColumns; col++) {
    const x = col * (brickWidth + brickPadding) + brickLeftOffset;
    const y = row * (brickHeight + brickPadding) + brickTopOffset;
    bricks[row][col] = { x, y, status: 1 };
  }
}

let gameOver = false;
let score = 0; //initial score

// Functions to draw game elements
function ballRender() {
  ctx.beginPath();
  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#02497a";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
  ctx.fillStyle = "#02497a";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (let row = 0; row < brickRows; row++) {
    for (let col = 0; col < brickColumns; col++) {
      const brick = bricks[row][col];
      if (brick.status === 1) {
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// Detect collision with bricks
function detectCollision() {
  for (let row = 0; row < brickRows; row++) {
    for (let col = 0; col < brickColumns; col++) {
      const brick = bricks[row][col];
      if (
        brick.status === 1 &&
        xPos > brick.x &&
        xPos < brick.x + brickWidth &&
        yPos > brick.y &&
        yPos < brick.y + brickHeight
      ) {
        yMoveDist = -yMoveDist;
        brick.status = 0;
        score += 10; //Increase Score by 10 w/ each brick
      }
    }
  }
}

// Show Game Over Message
function showGameOverMessage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "40px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);

  // Display "Click anywhere to reset"
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Click anywhere to reset", canvas.width / 2, canvas.height / 2 + 20);

  // Add a click listener to restart the game
  canvas.addEventListener("click", () => {
    location.reload();
  });
}

// Game Loop
function draw() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  drawPaddle();
  drawBricks();
  drawScore(); //DrawScore
  detectCollision();

  // Move ball
  xPos += xMoveDist;
  yPos += yMoveDist;

  // Ball-wall collisions
  if (xPos + ballRadius > canvas.width || xPos - ballRadius < 0) {
    xMoveDist = -xMoveDist;
  }
  if (yPos - ballRadius < 0) {
    yMoveDist = -yMoveDist;
  }

  // Paddle collision
  if (yPos + ballRadius > canvas.height - paddleHeight) {
    if (xPos > xPaddle && xPos < xPaddle + paddleWidth) {
      yMoveDist = -yMoveDist;
    } else if (yPos + ballRadius > canvas.height) {
      gameOver = true;
      showGameOverMessage();
    }
  }

  // Paddle movement
  if (moveRight && xPaddle < canvas.width - paddleWidth) {
    xPaddle += 15;
  }
  if (moveLeft && xPaddle > 0) {
    xPaddle -= 15;
  }

function drawScore(){ //draw Score
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${score}`, 10, 25);
  }


  requestAnimationFrame(draw);
}

// Event Listeners for Paddle Movement
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") moveRight = true;
  if (event.key === "ArrowLeft") moveLeft = true;
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") moveRight = false;
  if (event.key === "ArrowLeft") moveLeft = false;
});

// Start Game
draw();
//Start the game loop with setInterval()
//ball speed - the higher the number the slower the ball will travel
const refreshRate = 20;
setInterval(updateGame, refreshRate);



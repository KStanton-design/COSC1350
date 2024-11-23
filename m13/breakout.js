/* ..:: B R E A K O U T   G A M E ::..
 *
 * breakout.js
 * Author: Kathy Stanton
 * Date: 11/16/24
 * Project for COSC 1350
 *
 */

/*
// get the canvas element from the DOM.
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//drawing the ball 
canvas.width = 900;
canvas.height = 600;
let ballRadius = 15;
let xPos = canvas.width / 2;
let yPos = canvas.height / 2;


//Move the ball
//let xMoveDist = 10, yMoveDist = -10;
let xMoveDist = (Math.random() * 6 + 5) * (Math.random() < 0.5 ? 1 : -1);
let yMoveDist = -Math.random() * 6 - 5;

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

// Brick configuration
const brickRows = 4;
const brickColumns = 6;
const brickWidth = 125;
const brickHeight = 20;
const brickPadding = 10;
const brickTopOffset = 40;
const brickLeftOffset = 40;

// Define the array of brick objects
const bricks = [];
for (let row = 0; row < brickRows; row++) {
  bricks[row] = [];
  for (let col = 0; col < brickColumns; col++) {
    const x = col * (brickWidth + brickPadding) + brickLeftOffset;
    const y = row * (brickHeight + brickPadding) + brickTopOffset;
    bricks[row][col] = { x, y, status: 1 }; // status = 1 means the brick is visible
  }
}
let gameOver = false;

  // Function to draw bricks
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
  // Collision detection with bricks
function detectCollision() {
  for (let row = 0; row < brickRows; row++) {
    for (let col = 0; col < brickColumns; col++) {
      const brick = bricks[row][col];
      if (brick.status === 1) { // Check only active bricks
        if (
          xPos > brick.x && // Ball is to the right of the brick's left edge
          xPos < brick.x + brickWidth && // Ball is to the left of the brick's right edge
          yPos > brick.y && // Ball is below the brick's top edge
          yPos < brick.y + brickHeight // Ball is above the brick's bottom edge
        ) {
          yMoveDist = -yMoveDist; // Reverse ball's vertical direction
          brick.status = 0; // Mark the brick as hit
        }
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
  ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
}

// Draw Game
function draw() {
  if (gameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  drawPaddle();
  drawBricks();
  detectCollision();

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

    // Game over condition if the ball hits the bottom
   if(yPos + ballRadius > canvas.height){
  
    // Check for game over
    if (yPos + ballRadius > canvas.height) {
      gameOver = true; // Set the game over flag
      showGameOverMessage();
      return;
  }
   }

   // Paddle collision detection
   if (yPos + ballRadius > canvas.height - paddleHeight) {
    if (xPos > xPaddle && xPos < xPaddle + paddleWidth) {
        yMoveDist = -yMoveDist; // Reverse vertical direction
    } else if (yPos + ballRadius > canvas.height) {
        
      // Game over: Ball missed the paddle
        document.body.insertAdjacentHTML(
          "beforeend",
            `<div style="text-align: center; font-size: 24px; color: red; margin-top: 20px;">Game Over!</div>`
        );
        return; // Stop the game loop
    }
}
}
    // Paddle movement
    if (moveRight && xPaddle < canvas.width - paddleWidth) {
      xPaddle += 15; // Move paddle to the right
  }
  if (moveLeft && xPaddle > 0) {
      xPaddle -= 15; // Move paddle to the left
  }

  requestAnimationFrame(draw);

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

// Start the game loop
draw();

//ball speed - the higher the number the slower the ball will travel
const refreshRate = 30;
const intervalID = setInterval(draw, refreshRate);
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
let xMoveDist = (Math.random() * 3 + 2) * (Math.random() < 0.5 ? 1 : -1);
let yMoveDist = -Math.random() * 3 - 2;

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

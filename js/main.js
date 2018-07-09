var canvas;
var ctx;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;


// make sure not to do any thing before page finish loading
window.onload = function() {
    //fetch canvas from the dom
    canvas = document.getElementById('gameCanvas');
    //get drawing context on the canvas
    ctx = canvas.getContext('2d');
    //Calculate the frequency depending on the intended fps
    var framesPerSecond = 30;
    setInterval(function() {
        move();
        draw();
    }, 1000 / framesPerSecond)

}

function move() {
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    // if the ball position equals the canvas width, flip the direction by flipping the ballSpeedX var. 
    if (ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    // if the ball position equals the canvas starting point from the left, flip the direction by flipping the ballSpeedX var. 
    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    // if the ball position equals the canvas hight, flip the direction by flipping the ballSpeedY var. 
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    // if the ball position equals the canvas starting point from the top, flip the direction by flipping the ballSpeedY var. 
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

// Draw rectangle function
function drawRect(leftX, leftY, width, height, color) {
    //set the fill of the background to black
    ctx.fillStyle = color;
    //set background dimensions
    ctx.fillRect(leftX, leftY, width, height);
}

function drawCircle(centerX, centerY, radius, color) {
    // set the fill of the circle
    ctx.fillStyle = color;
    // start path
    ctx.beginPath();
    // set the circle path
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function draw() {
    // Draw the canvas background
    drawRect(0, 0, canvas.width, canvas.height, 'black')
        // Draw the paddle on the left side
    drawRect(0, (canvas.height / 2) - 30, 10, 100, 'white')
        // Draw the ball
    drawCircle(ballX, ballY, 10, 0);
}
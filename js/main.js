var canvas;
var ctx;
var ballX = 50;

// make sure not to do any thing before page finish loading
window.onload = function() {
    //fetch canvas from the dom
    canvas = document.getElementById('gameCanvas');
    //get drawing context on the canvas
    ctx = canvas.getContext('2d');
    call()
}

function call() {
    draw()
}

function draw() {
    //set the fill of the background to black
    ctx.fillStyle = 'black';
    //set background dimensions
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // draw the Paddles
    ctx.fillStyle = 'white';
    ctx.fillRect(0, (canvas.height / 2) - 30, 10, 100);
    ctx.fillStyle = 'white';
    ctx.fillRect(790, (canvas.height / 2) - 30, 10, 100);
}
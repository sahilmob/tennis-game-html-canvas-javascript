var canvas;
var ctx;

// make sure not to do any thing before page finish loading
window.onload = function() {
    //fetch canvas from the dom
    canvas = document.getElementById('gameCanvas');
    //get drawing context on the canvas
    ctx = canvas.getContext('2d');
    //set the fill of the context to black
    ctx.fillStyle = 'black';
    //set context dimensions
    ctx.fillRect(0, 0, canvas.width, canvas.height)

}
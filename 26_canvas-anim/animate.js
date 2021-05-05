// Team Penguins - Constance Chen and Michelle Thaung
// SoftDev
// K26 -- canvas based JS drawing
// 2021-05-05

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#93E9BE";

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
    console.log("clearing...");
    ctx.clearRect(0,0,c.width,c.height);
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
    console.log("drawDot invoked...")
    window.cancelAnimationFrame( requestID );
    console.log(radius);
    if (growing){ //keep growing until radius hits the border of the canvas]
        if (radius <= 250){
            clear();
            ctx.beginPath();
            ctx.arc(250, 250, radius, 0, 2 * Math.PI); 
            ctx.fill();
            radius++;
        }
        else{
            growing = false;
        }
    }
    
    if (!growing) { //keep shrinking until radius gets to 0
        if(radius > 0){
            clear();
            ctx.beginPath();
            ctx.arc(250, 250, radius, 0, 2 * Math.PI); 
            ctx.fill();
            radius--;
        }
        else{
          growing = true;
      }
    }
    requestID = window.requestAnimationFrame( drawDot );
};


//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log(requestID);

    if (requestID) {
        window.cancelAnimationFrame(requestID);
    }
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
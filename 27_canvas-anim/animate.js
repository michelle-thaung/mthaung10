// Team Penguinz - Helena Williams and Michelle Thaung
// SoftDev
// K27 -- canvas based JS drawing
// 2021-05-07

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
    ctx.clearRect(0,0,c.width,c.height);
};


var radius = 0;
var growing = true;
var logo = new Image();
var xx = 25;
var yy = 25;
logo.src = "logo_dvd.jpg";
var dx = "pos";
var dy = "pos";


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

var drawDVD = () => {
    clear();
    window.cancelAnimationFrame( requestID );
    ctx.drawImage(logo, xx, yy, 75, 50);
    if (xx > 425){
      console.log("Just passed east wall!");
      dx = "neg";
    }
    if (xx < 0){
      console.log("Just passed west wall!");
      dx = "pos";
    }
    if (yy > 450){
      console.log("Just passed south wall!");
      dy = "neg";
    }
    if (yy < 0){
      console.log("Just passed north wall!");
      dy = "pos";
    }
    if (dy == "pos"){
      yy+=2;
    }
    else{
      yy-=2;
    }
    if (dx == "pos"){
      xx+=2;
    }
    else{
      xx-=2;
    }
    requestID = window.requestAnimationFrame( drawDVD );
    console.log("dx: "+dx);
    console.log("dy: "+dy);
}

//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")

    if (requestID) {
        window.cancelAnimationFrame(requestID);
    }
};


dotButton.addEventListener( "click", drawDot );
buttonDVD.addEventListener( "click", drawDVD );
stopButton.addEventListener( "click",  stopIt );

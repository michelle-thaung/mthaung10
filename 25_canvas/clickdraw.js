// Team Penguins - Constance Chen and Michelle Thaung
// SoftDev
// K25 -- canvas based JS drawing
// 2021-05-03

//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "dot";

//changes drawing modes
var changeMode = function () {
    console.log("changing mode...");
    if (mode == "square"){
        mode = "dot"
    }
    else{
        mode = "square"
    }
}

//draws square
var square = (e) =>  {
    console.log("drawing square...");
    x = event.offsetX; // finds the x coordinate based on distance from border
    y = event.offsetY; // finds the y coordinate based on distance from border
    ctx.fillRect(x, y, 50, 50); 
}

//draws dot
var dot = (e) => {
    console.log("drawing dot...");
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.arc(x, y, 10, 0, 2 * Math.PI); 
    ctx.fill();
    ctx.stroke();
  }

//activates draw
var draw = (e) => {
    console.log("drawing...")
    event.preventDefault(); // prevents default behaviors
    ctx.beginPath(); // separates each drawing (no line connecting them)
    if (mode == "square") {
        square();
    }
    if (mode == "dot") {
        dot();
    }
    console.log("...done")
}

//clears canvas
var clearCanvas = function () {
    console.log("clearing...");
    ctx.clearRect(0,0,c.width,c.height);
}

//event listeners
c.addEventListener("mousedown", draw);
document.getElementById("clear").addEventListener("click", clearCanvas);
document.getElementById("change").addEventListener("click", changeMode);
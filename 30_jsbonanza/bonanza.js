// Team Triangular Joe -- Jonathan Lee, Eric Lo, Michelle Thaung
// SoftDev
// K30 -- Jsorcery
// 2021-05-15

//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var clearButton = document.getElementById("buttonClear");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");
ctx.fillStyle = 'red';

var requestID = 0;  //init global var for use with animation frames


//erases the remnants of the previous animation frame
var clear = () => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
};

//resets all of the objects and erases the remnants of the previous animation frame
var clearTotal = () => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
    circles = [];
};

//list of all the objects to be rendered
var circles = [];

//constructor for the circle objects to be drawn
function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.growing = true;

    this.color = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`;
}

//when user clicks on the canvas, a new circle object is created at the point of click and added to the list of circles
c.onclick = (e) => {
    var circle = new Circle(e.offsetX, e.offsetY);
    circles.push(circle);
}

//draw fxn iterates through all of the circle objects and calculates what should be drawn next for each circle
var draw = () => {
    console.log("drawCirc invoked...")

    window.cancelAnimationFrame(requestID); // so it doesn't speed up when clicking the button multiple times

    clear(ctx); //erase previous frame

    //iterate through all of the circles created
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i]; //var to track object

        //draw the object (on the invisible canvas)
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = circle.color;
        ctx.fill();

        //determine shrinkage
        if (circle.radius >= 250) {
            circle.growing = false
        } else if (circle.radius <= 0) {
            circle.growing = true;
        }

        //update size
        if (circle.growing) circle.radius++;
        else circle.radius--;

    }

    //callback
    requestID = window.requestAnimationFrame(draw);

};

draw(); //always animating, will do nothing when there are no objects to render
clearButton.addEventListener("click", clearTotal); //clear button resets everything
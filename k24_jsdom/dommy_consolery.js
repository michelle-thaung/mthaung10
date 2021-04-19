// Team joe^2 - Eric Lo, Michelle Thaung
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15

//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
// adds a specified amount to 30
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
// like a dictionary, but not all keys are strings
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


//(define fact (lambda (n) ...)
//factorial function
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){ // no variable declared
    prod = prod * n;
  }
  return prod;
};


//(define fact (lambda (n) ...)
//recursive factorial function
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};

//document refers to HTML doc
var addItem = function(text) {
  var list = document.getElementById("thelist"); //refers to line 21 in index.html
  var newitem = document.createElement("li"); //dynamically modifies the HTML
  newitem.innerHTML = text; //sets the HTMl within thelist tag to text
  list.appendChild(newitem); //appendChild adds a child Node to a Node
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

//adds a red class to each list item
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red'); //red class for even list items
    } else {
      items[i].classList.add('blue'); //blue class for odd list items
    }
  }
};

//prints out respective info when button is clicked
var buttonCallback = function(e) { //e stands for event, used with addEventListener 
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this); //prints out button HTML because of line 116 
}

//button ID
var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);

//like the red function but uses event
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}

var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green'); //adds green class to items that don't have green class; removes if green class already assigned
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue'); //same as toggle('green') but with blue
  });
}
// Select elements on page
// Canvas and Context from canvas
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
// Shake button
const btn = document.querySelector(".shake-btn");
const btnUp = document.querySelector(".up-btn");
const btnDown = document.querySelector(".down-btn");
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const moveAmount = 20;
// Grab width and height from canvas deconstructing
const { width, height } = canvas;
// Setup canvas for drawing
// Start at random position for x and y
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// We will use this variable for color hsl
let hue = 0;
//The following methods control how lines are drawn in canvas context.
//Defines the type of corners where two lines meet.
ctx.lineJoin = "round";
//Type of endings on the end of lines.
ctx.lineCap = "round";
ctx.lineWidth = moveAmount;
// Color of line
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//Starts a new path by emptying the list of sub-paths
ctx.beginPath();
//Moves the starting point of a new sub-path to the (x, y) coordinates.
ctx.moveTo(x, y);
//Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
ctx.lineTo(x, y);
//Strokes the current sub-paths with the current stroke style.
ctx.stroke();
// Write a draw function
function draw({ key }) {
  //Increment hue + 1
  hue += 1;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // Do what depending on what key is pressed
  switch (key) {
    case "ArrowUp":
      y -= moveAmount;
      break;
    case "ArrowDown":
      y += moveAmount;
      break;
    case "ArrowRight":
      x += moveAmount;
      break;
    case "ArrowLeft":
      x -= moveAmount;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault(); // Prevent default only on Arrow keys
    draw({ key: e.key }); // Passing key is equal to key pressed
  }
}

function handleClick(e){
    draw({ key: e.target.name });
}

// Clear/Shake function
function clearCanvas() {
  canvas.classList.add("shake"); // Add shake class
  ctx.clearRect(0, 0, width, height); // Delete canvas from starting point to end
  canvas.addEventListener(
    "animationend", // Event listener for animation end
    function() {
      canvas.classList.remove("shake"); // Remove shake class
    }
  );
}
// Listen for arrow keys
window.addEventListener("keydown", handleKey);
// Listen for click on shake button
btn.addEventListener("click", clearCanvas);
// Listen for click on directions buttons
btnUp.addEventListener('click', handleClick);
btnDown.addEventListener('click', handleClick);
btnLeft.addEventListener('click', handleClick);
btnRight.addEventListener('click', handleClick);
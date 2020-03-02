// Select elements on page
// Canvas and Context from canvas
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
// Shake button
const btn = document.querySelector('.shake');
const moveAmount = 10;
console.log(btn)
// Grab width and height from canvas deconstructing
const {width, height} = canvas;
// Setup canvas for drawing
// Start at random position for x and y
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* height);
console.log(x,y)
// Write a draw function

// Write a handler for keys

// Clear/Shake function

// Listen for arrow keys
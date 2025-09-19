/*
 This is a block comment.
*/

const ball = document.getElementById("ball"); // get the ball

document.addEventListener("keydown", hanndleKeyPress); // listen for the keys
let position = 0; // set initial position

/* 
handleKeyPress
responds to certain key presses by updating position.
*/

function hanndleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update the ball's position
}
/*
refresh changes the position of the ball
*/

function refresh() {
  ball.style.left = position + "px";
}

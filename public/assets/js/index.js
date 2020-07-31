// The attributes of the player.
var player = {
  x: 110,
  y: 1000,
  x_v: 0,
  y_v: 0,
  jump: true,
  height: 75,
  width: 25,
};
// The status of the arrow keys
var keys = {
  right: false,
  left: false,
  up: false,
};

// The friction and gravity to show realistic movements
var gravity = 0.4;
var friction = 0.5;
// The number of platforms
var num = 22;
// The platforms
var platforms = [];
var pillers = [];

var powerups = [];
// Function to render the canvas
function rendercanvas() {
  ctx.fillStyle = "#F0F8FF";
  ctx.fillRect(0, 0, 2000, 2000);
}
// Function to render the player
function renderplayer() {
  ctx.fillStyle = "#F08080";
  ctx.fillRect(player.x, player.y - 75, player.width, player.height);
}
//function to create a piller that will block the player from moving
function createPiller() {
  for (i = 0; i < num; i++) {
    pillers.push({
      x: 500 * i,
      y: 1000 - 30 * i,
      width: 50,
      height: 100,
    });
  }
}
function renderPiller() {
  ctx.fillStyle = "#45597E";
  for (i = 0; i < num; i++) {
    ctx.fillRect(
      pillers[i].x,
      pillers[i].y,
      pillers[i].width,
      pillers[i].height
    );
  }
  ctx.fillRect(player.x - 20, player.y - 30, player.width, player.height);
}
// Function to create platforms
function createFloor() {
  for (i = 0; i < num; i++) {
    platforms.push({
      x: 100 * i,
      y: 200 + 30 * i,
      width: 110,
      height: 15,
    });
  }
}

// Function to render platforms
function renderFloor() {
  ctx.fillStyle = "#45597E";
  for (i = 0; i < 2; i++) {
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
  for (i = 3; i < 4; i++) {
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
  for (i = 6; i < 9; i++) {
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
  for (i = 11; i < 12; i++) {
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
  for (i = 13; i < 22; i++) {
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
}
//POWERUPS

// This function will be called when a key on the keyboard is pressed
function keydown(e) {
  // 37 is the code for the left arrow key
  if (e.keyCode == 37 || e.keyCode == 65) {
    keys.left = true;
  }
  // 37 is the code for the up arrow key
  if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87) {
    if (player.jump == false) {
      player.y_v = -10;
    }
  }
  // 39 is the code for the right arrow key
  if (e.keyCode == 39 || e.keyCode == 68) {
    keys.right = true;
  }
}
// This function is called when the pressed key is released
function keyup(e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    keys.left = false;
  }
  if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87) {
    if (player.y_v < -2) {
      player.y_v = -3;
    }
  }
  if (e.keyCode == 39 || e.keyCode == 68) {
    keys.right = false;
  }
}
function loop() {
  // If the player is not jumping apply the effect of frictiom
  if (player.jump == false) {
    player.x_v *= friction;
  } else {
    // If the player is in the air then apply the effect of gravity
    player.y_v += gravity;
  }
  player.jump = true;
  // If the left key is pressed increase the relevant horizontal velocity
  if (keys.left) {
    player.x_v = -2.5;
  }
  if (keys.right) {
    player.x_v = 2.5;
  }
  // Updating the y and x coordinates of the player
  player.y += player.y_v;
  player.x += player.x_v;
  // A simple code that checks for collions with the platform
  let i = -2;
  for (n = 0; n < 2; n++) {
    if (
      platforms[n].x < player.x &&
      player.x < platforms[n].x + platforms[n].width &&
      platforms[n].y < player.y &&
      player.y < platforms[n].y + platforms[n].height
    ) {
      i = n;
    }
  }
  for (n = 3; n < 4; n++) {
    if (
      platforms[n].x < player.x &&
      player.x < platforms[n].x + platforms[n].width &&
      platforms[n].y < player.y &&
      player.y < platforms[n].y + platforms[n].height
    ) {
      i = n;
    }
  }
  for (n = 5; n < 9; n++) {
    if (
      platforms[n].x < player.x &&
      player.x < platforms[n].x + platforms[n].width &&
      platforms[n].y < player.y &&
      player.y < platforms[n].y + platforms[n].height
    ) {
      i = n;
    }
  }
  for (n = 10; n < 12; n++) {
    if (
      platforms[n].x < player.x &&
      player.x < platforms[n].x + platforms[n].width &&
      platforms[n].y < player.y &&
      player.y < platforms[n].y + platforms[n].height
    ) {
      i = n;
    }
  }
  for (n = 13; n < num; n++) {
    if (
      platforms[n].x < player.x &&
      player.x < platforms[n].x + platforms[n].width &&
      platforms[n].y < player.y &&
      player.y < platforms[n].y + platforms[n].height
    ) {
      i = n;
    }
  }

  if (i > -1) {
    player.jump = false;
    player.y = platforms[i].y;
  }

  //Rendering the canvas, the player and the platforms

  rendercanvas();
  renderplayer();
  renderFloor();
  renderPiller();
}
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.canvas.height = 2000;
ctx.canvas.width = 2000;
createFloor();
createPiller();
console.log(player);
// Adding the event listeners
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
setInterval(loop, 22);

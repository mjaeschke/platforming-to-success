// The attributes of the player.
var player = {
  x: 110,
  y: 700,
  x_v: 0,
  y_v: 0,
  jump: true,
  height: 75,
  width: 50,
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
var num = 20;
// The platforms
var platforms = [];
// Function to render the canvas
function rendercanvas() {
  ctx.fillStyle = "#F0F8FF";
  ctx.fillRect(0, 0, 2000, 1000);
}
// Function to render the player
function renderplayer() {
  ctx.fillStyle = "#F08080";
  ctx.fillRect(player.x - 50, player.y - 75, player.width, player.height);
}
// Function to create platforms
function createFloor() {
  for (i = 0; i < num; i++) {
    platforms.push({
      x: 100 * i,
      y: 800,
      width: 100,
      height: 100,
    });
  }
}
// creates an ascending staircase
//function createAStair() {
//  for (i = 0; i < num; i++) {
//    platforms.push({
//      x: 50 * i,
//      y: 800 - 100 * i,
//      width: 80,
//      height: 60,
//    });
//  }
//}
// creates a descending staircase
//function createDStair() {
//  for (i = 0; i < num; i++) {
//    platforms.push({
//      x: 50 * i,
//      y: 800 - 100 * i,
//      width: 80,
//      height: 60,
//    });
//  }
//}

function renderFall() {
  ctx.fillStyle = "white";
  ctx.fillRect(
    platforms[8].x,
    platforms[8].y,
    platforms[8].width,
    platforms[8].height
  );
}
// Function to render platforms
function renderplat() {
  for (i = 0; i < num; i++) {
    ctx.fillStyle = "#45597E";
    ctx.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
}
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
  let i = -1;
  for (n = 0; n < num; n++) {
    if (
      platforms[n].x < player.x &&
      player.x < platforms[n].x + platforms[n].width &&
      platforms[n].y < player.y &&
      player.y < platforms[n].y + platforms[n].height
    ) {
      i = n;
    }
    if (i > -1) {
      player.jump = false;
      player.y = platforms[i].y;
    }
  }
  // Rendering the canvas, the player and the platforms
  rendercanvas();
  renderplayer();
  renderplat();
  renderFall();
  createAStair();
}
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
ctx.canvas.height = 1000;
ctx.canvas.width = 1000;
createFloor();
console.log(player);
// Adding the event listeners
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
setInterval(loop, 22);

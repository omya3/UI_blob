import Blob from "/src/Blob.js";

const canvas = document.getElementById("drug");
const ctx = canvas.getContext("2d");

const height = 600;
const width = 1200;
let blobs = [];
var targetX = 0;
var targetY = 0;

function handleMouseMove(event) {
  targetX = event.clientX;
  targetY = event.clientY;
}

document.onmousemove = handleMouseMove;

ctx.fillRect(0, 0, width, height);

for (var i = 0; i < 10; i++) {
  blobs.push(new Blob(height, width));
}

function slate() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  for (var i = 0; i < 10; i++) {
    blobs[i].update(targetX, targetY);
  }
  for (var i = 0; i < 10; i++) {
    blobs[i].drawbig(ctx);
  }
  for (var i = 0; i < 10; i++) {
    blobs[i].drawsmall(ctx);
  }
  requestAnimationFrame(slate);
}
requestAnimationFrame(slate);

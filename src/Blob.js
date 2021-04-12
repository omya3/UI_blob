export default class Blob {
  constructor(height, width, targetX, targetY) {
    this.height = height;
    this.width = width;
    this.position = {
      x: Math.floor(Math.random() * this.width) + 0,
      y: Math.floor(Math.random() * this.height) + 0
    };
    this.speed = {
      x: 0,
      y: 0
    };
    this.easing = Math.random();
  }

  update(targetX, targetY) {
    this.speed.x += (targetX - this.position.x) * this.easing;
    this.speed.x *= 0.92;
    this.speed.y += (targetY - this.position.y) * this.easing;
    this.speed.y *= 0.92;
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  drawbig(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle ="yellow";
    ctx.fill();
  }
  drawsmall(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

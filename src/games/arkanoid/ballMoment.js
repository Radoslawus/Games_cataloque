export function BallMovement(ctx, ballObj) {
    let data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
    data.draw(ctx);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
}

class Ball {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "#6c9c4c";
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.strokeStyle = "#90ab7e";
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }
}
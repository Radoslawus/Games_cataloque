export default (ctx, canvas, paddleProps) => {
    class Paddle {
        constructor(x) {
            this.x = x;
            this.height = 20;
            this.y = canvas.height - this.height * 2;
            this.width = paddleProps.width;
            this.colors = ["red", "#FFA62B"];
            this.rad = 20
        }
        move() {
            ctx.lineJoin = "round"; // ??
            ctx.lineWidth = this.rad // ??
            ctx.fillStyle = this.colors[1];
            ctx.strokeStyle = this.colors[1];
            ctx.fillStyle = this.colors[1];
            ctx.strokeRect(this.x + this.rad / 2, this.y + this.rad / 2, this.width - this.rad, this.height - this.rad);
            ctx.fillRect(this.x + this.rad / 2, this.y + this.rad / 2, this.width - this.rad, this.height - this.rad);
        }
    }

    let paddle = new Paddle(paddleProps.x);
    paddle.move();
    if (paddleProps.x <= 0) {
        paddleProps.x = 0;
    } else if (paddleProps.x + paddleProps.width >= canvas.width) {
        paddleProps.x = canvas.width - paddleProps.width;
    }
};
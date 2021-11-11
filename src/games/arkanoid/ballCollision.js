import ResetBall from "./resetBall"

export default function ballCollision(ballObj, canvas, player, paddleProps) {
    // down
    if (ballObj.y + ballObj.rad > canvas.height) {
        player.lives--

            ResetBall(ballObj, paddleProps)
    }

    // up
    if (ballObj.y - ballObj.rad < 0) {
        ballObj.dy *= -1
    }
    // left and right
    if (ballObj.x - ballObj.rad < 0 || ballObj.x + ballObj.rad > canvas.width) {
        ballObj.dx *= -1
    }
}
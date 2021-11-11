// RESET THE BALL
export default function ResetBall(ballObj, paddleProps) {
    ballObj.x = paddleProps.x + paddleProps.width / 2
    ballObj.y = paddleProps.y - 30
    ballObj.dx = 5 * (Math.random() * 2 - 1)
    ballObj.dy = -5
}
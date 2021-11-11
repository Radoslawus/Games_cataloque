import data from "./data";
import ResetBall from "./resetBall";

export default function AllBroken(bricks, player) {
    let { brickObj, ballObj, paddleProps } = data
    let total = 0;
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (total === bricks.length) {
        ResetBall(ballObj, paddleProps)
        player.level += 1
        player.lives += 1
        player.score += 100
        brickObj.y = 50
    }
}
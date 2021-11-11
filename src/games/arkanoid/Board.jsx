import React, {useEffect, useRef} from 'react'

import AllBroken from './allBroken'
import './arkanoid.css'
import ballCollision from './ballCollision'
import { BallMovement } from './ballMoment'
import Brick from './brick'
import BrickCollision from './brickCollision'
import data from './data'
import paddle from './paddle'
import paddleCollision from './paddleCollision'
import PlayerStats from './playerStsts'
import ResetBall from './resetBall'

let { ballObj, paddleProps, brickObj, player } = data
let bricks = []

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current
            if(canvas === null) return
            const ctx = canvas.getContext('2d')

            // paddleProps.y should be here cos canvas is ont defined in data.js
            paddleProps.y = canvas.height - 30;

            let newBrickSet = Brick(player.level, bricks, canvas, brickObj)
            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet
            }
            
            ctx.clearRect(0,0, canvas.width, canvas.height)
            PlayerStats(ctx, player, canvas)

            bricks.map(brick => {
                return brick.draw(ctx)
            })

            BallMovement(ctx, ballObj)
            ballCollision(ballObj, canvas, player, paddleProps)

            // All broken
            AllBroken(bricks, player, canvas, ballObj, paddleProps)

            if (player.lives === 0) {
                alert("Game Over! Press ok to restart")
                player.lives = 5
                player.level = 1
                player.score = 0
                ResetBall(ballObj, paddleProps)
                bricks.length = 0
                brickObj.y = 50
            }

            //brick Collision
            let brickCollision
            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i])
                if (brickCollision.hit && !bricks[i].broke) {
                    if (brickCollision.axis === "X") {
                        ballObj.dx *= -1
                        bricks[i].broke = true
                    } else if (brickCollision.axis === "Y") {
                        ballObj.dy *= -1
                        bricks[i].broke = true
                    }
                    player.score += 10
                }
            }

            paddle(ctx, canvas, paddleProps)
            paddleCollision(ballObj, paddleProps)
            
            requestAnimationFrame(render)
            if(canvas === null) return null
        }
        render()
    }, [])

    return (
        <div>
            <h1>Arcanoid</h1>
            <canvas 
                id="canvas" 
                height="600px" 
                width={window.innerWidth - 20} 
                ref={canvasRef}
                onMouseMove={e => (
                    paddleProps.x = e.clientX - paddleProps.width / 2 - 10
                )}    
            />
        </div>
    )
}

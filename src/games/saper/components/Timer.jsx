import { useEffect, useState } from "react"

let timeInterval
const Timer = ({gameover, victory, setStopTime, stopTime}) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        if((gameover || victory) && time > 0) {
            setStopTime(time - 1)
            setTime(0)
        }
    }, [gameover, victory, time, setStopTime])

    useEffect(() => {
        const incrementTime = () => {
            let newTime = time + 1
            setTime(newTime)
        }
        timeInterval = setTimeout(() => {
            incrementTime()
        }, 1000)
        if(gameover || victory) {
            clearInterval(timeInterval)
        }
    }, [time, gameover, victory])
    return (
        <div>
            ⏰: {(!victory && !gameover) ? time : stopTime}
        </div>
    )
}

export default Timer

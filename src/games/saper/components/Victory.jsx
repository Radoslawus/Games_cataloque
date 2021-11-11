import { useEffect, useState } from "react"

const Victory = ({reset, stopTime}) => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRender(true)
        }, 500)
    }, [])

    return (
        <div className="modal" style={{opacity: render ? 1 : 0}}>
            <div className="modal-box win">
                <h3>You have mennaged to survive! For now... </h3>
                <p>Your time: <strong>{stopTime}</strong> s</p>
                <button className="tryAgain" onClick={() => reset()}>Again?</button>
            </div>
        </div>
    )
}
export default Victory
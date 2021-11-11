import { useEffect, useState } from "react"

const Modal = ({reset}) => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRender(true)
        }, 1000)
    }, [])

    return (
        <div className="modal" style={{opacity: render ? 1 : 0}}>
            <div className="modal-box">
                <h3>You have evaporated in a forcefull blow. Kaboom!</h3>
                <button className="tryAgain" onClick={() => reset()}>Again ?</button>
            </div>
        </div>
    )
}
export default Modal

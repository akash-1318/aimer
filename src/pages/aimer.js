import "./aimer.css"
import {Time} from "../components/timer/time"
import {Focus} from "../components/focus/focus"
const Aimer = () => {
    return(
        <div className="enter__container">
            <div className="enter__sub-container">
                <Time/>
                <Focus/>
            </div>
        </div>
    )
}

export {Aimer}
import "./aimer.css"
import {Time} from "../components/timer/time"
import {Focus} from "../components/focus/focus"
import {Quote} from "../components/quote/quote"
const Aimer = () => {
    return(
        <div className="enter__container">
            <div className="enter__sub-container">
                <Time/>
                <Focus/>
                <Quote/>
            </div>
        </div>
    )
}

export {Aimer}
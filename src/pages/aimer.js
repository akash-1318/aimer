import "./aimer.css"
import {Time} from "../components/timer/time"
import {Focus} from "../components/focus/focus"
import {Quote} from "../components/quote/quote"
import {Weather} from "../components/weather/weather"
const Aimer = () => {
    return(
        <div className="enter__container">
            <div className="enter__sub-container">
                <Time/>
                <Focus/>
                <Quote/>
                <Weather/>
            </div>
        </div>
    )
}

export {Aimer}
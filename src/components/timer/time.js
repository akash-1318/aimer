import { useEffect, useState } from "react"
import "./time.css"
const Time = () => {
    const [userName, getUserName] = useState("")
    const [time, setTime] = useState(new Date());
    const [timeFormate, changeTimeFormate] = useState(false)
    const [showFormateBtn, setShowFormateBtn] = useState(false)

    useEffect(()=>{
        getUserName(localStorage.getItem("username"))
      },[userName])

    const minute = time.getMinutes()
    const minutes = minute / 10 < 1 ? `0${minute}` : minute
    const hour = time.getHours()
    const hour24TimeFormate = `${hour}:${minutes}`
    const hour12 = hour % 12 || 12
    const hour12TimeFormate = `${hour12}:${minutes}`
    
    const greetings = `Good ${ 
        (hour < 4 && "night") ||
		(hour < 12 && "morning") ||
		(hour < 16 && "afternoon") ||
		(hour < 21 && "evening") ||
        "night"
    }` 
    
    useEffect(()=>{
        setInterval(()=>{
            setTime(()=> new Date())
        },1000)
    },[])
    
    return (
        <div className="aimer__main-container">
            <div className="time__container"
            onMouseOver = {() => setShowFormateBtn(true)}
            onMouseLeave = {() => setShowFormateBtn(false)}
            >
            <p className="time__para">{timeFormate ? hour12TimeFormate : hour24TimeFormate}</p>
            <button 
            className={`date__btn ${showFormateBtn ? "show" : ""}`}
            onClick = {() => changeTimeFormate(!timeFormate)}
            ><i class='bx bx-repost'></i></button>
            </div>
            <p className="greeting__para">{greetings}, {userName}</p>
        </div>
    )
}

export {Time}
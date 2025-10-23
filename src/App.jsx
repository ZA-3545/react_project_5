import React from "react"
import { useState } from "react"
import { useRef } from "react"
import Control from "./components/Control"
import './style.css'
function App() {
const [time, settime] = useState(0)
const timerRef = useRef(null)

const startTimer=()=>{
  if(timerRef.current){
    return
  }
  timerRef.current=setInterval(()=>{
    settime((prev)=>prev+1)
  },1000)
}

const stopTimer=()=>{
  clearInterval(timerRef.current)
  timerRef.current=null
}

const resetTimer=()=>{
  stopTimer()
  settime(0)
}

const formatTime=(t)=>{
  const min=Math.floor(t/60)
  const sec = t % 60
  return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
}

  return (
    <div className="card">
      <h2>Zain's Stopwatch</h2>
      <h1 className="time">{formatTime(time)}</h1>
      <Control start={startTimer} stop={stopTimer} reset={resetTimer}/>
    </div>
  )
}

export default App

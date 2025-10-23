import React from 'react'
import '../style.css'
const Control = ({start,stop,reset}) => {
  return (
    <div className='control'>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Control
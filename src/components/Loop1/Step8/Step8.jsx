import React, { useState } from 'react'

import './Step8.scss'

const Loop1Step8 = () => {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("")

  console.log(selectedButton)

  return (
    <div className="Loop1Step8">
      <div className="step8_wrapper">
        <button onClick={() => {
          setSelectedButton("search")
          setOpen(true)
        }}>Search</button>
        <button onClick={() => {
          setSelectedButton("run")
          setOpen(true)
        }}>Run</button>
      </div>
      {selectedButton === "search" ? <div className={`sidenav ${open ? 'active' : ''}`}>
        <p>Whoa! You found me</p>
        <button onClick={() => setOpen(false)}>Hide back</button>
      </div> : selectedButton === "run" ? <div className={`sidenav ${open ? 'active' : ''}`}>
        <p>Please don't run me!</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </div> : ''}
    </div>
  )
}

export default Loop1Step8;
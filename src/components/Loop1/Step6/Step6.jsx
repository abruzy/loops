import React, { useEffect, useState } from 'react'

import './Step6.scss'

const Loop1Step6 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const onMouseMove = (e) => {
    console.log(e)
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      // const mouseX = setPosition()
    })
  }, [])

  return (
    <div className="Loop1Step6">
      <div className="box" onMouseMove={(e) => onMouseMove(e)}></div>
      <div>X: {position.x}, Y: {position.y}</div>
    </div>
  )
}

export default Loop1Step6;

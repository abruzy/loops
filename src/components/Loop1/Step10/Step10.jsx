import React, { useState } from 'react'

import './Step10.scss'

const Loop1Step10 = () => {
  const [diffX, setDiffX] = useState(0)
  const [diffY, setDiffY] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [styles, setStyles] = useState({})

  const _dragStart = (e) => {
    console.log(e)
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true)
  }

  const _dragging = (e) => {
    if (dragging) {
      let left = e.screenX - diffX;
      let top = e.screenY - diffY;

      setStyles({ left, top })
    }
  }

  const _dragEnd = () => {
    setDragging(false)
  }

  return (
    <div className="Loop1Step10">
      <div className="step10-box" style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd} />
    </div>
  )
}

export default Loop1Step10

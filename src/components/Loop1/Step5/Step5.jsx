import React, { useState, useEffect } from 'react'

import './Step5.scss'

const Loop1Step5 = () => {
  const [text, setText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text => text + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Loop1Step5">
      <h1>We can help you with {text}</h1>
    </div>
  )
}

export default Loop1Step5

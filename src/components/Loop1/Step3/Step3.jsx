import React, { useState } from 'react'

import './Step3.scss'

const Loop1Step3 = () => {
  const [toggles, setToggles] = useState(Array(5).fill(false));

  const doToggling = index => {
    setToggles(
      toggles.map((toggle, toggleIndex) => {
        if (index === toggleIndex) {
          return (toggle = !toggle);
        }

        return Boolean(Math.round(Math.random() * 1))
      })
    )
  }

  return (
    <div className="Loop1Step3">
      <div className="wrapper">
        {toggles.map((toggle, index) => (
          <div
            onClick={() => doToggling(index)}
            key={`loop1s3_toggle_${index}`}
            className={`toggle ${toggle ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Loop1Step3

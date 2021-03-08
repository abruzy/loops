import React from 'react'

import './Step3.scss'

const Loop1Step3 = () => {
  const changeSwitch = e => {
    console.log(e);
  }

  return (
    <div className="Loop1Step3">
      <div className="wrapper js-switch">
        <label className="switch" onClick={e => changeSwitch(e)}>
          <input type="checkbox" className="switch__input js-switch__item" />
          <div className="switch__field"></div>
        </label>
        <label className="switch">
          <input type="checkbox" className="switch__input js-switch__item" />
          <div className="switch__field"></div>
        </label>
        <label className="switch">
          <input type="checkbox" className="switch__input js-switch__item" />
          <div className="switch__field"></div>
        </label>
        <label className="switch">
          <input type="checkbox" className="switch__input js-switch__item" />
          <div className="switch__field"></div>
        </label>
        <label className="switch">
          <input type="checkbox" className="switch__input js-switch__item" />
          <div className="switch__field"></div>
        </label>
      </div>
    </div>
  )
}

export default Loop1Step3

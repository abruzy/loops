import React from 'react'

import './Step4.scss'

const Loop1Step4 = () => {
  return (
    <div className="Loop1Step4">
      <div className="wrapper">
        <div className="grid1">
          <div className="message">
            <span>1</span>
            <p>Choose title</p>
          </div>

          <div className="message">
            <span>2</span>
            <p>Choose description</p>
          </div>

          <div className="message">
            <span>3</span>
            <p>Confirm data</p>
          </div>
        </div>

        <div className="grid2">
          <p>Choose title content</p>
          <div className="btns">
            <button className="btnBack">Back</button>
            <button className="btnSubmit">Submit title</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loop1Step4

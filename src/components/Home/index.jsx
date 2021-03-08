import React from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

const Directory = () => {
  return (
    <div className="Directory">
      <h1>Direcotory</h1>
      <div className="loops">
        <Link to="/loop1-step1">Loop1Step1</Link>
        <Link to="/loop1-step2">Loop1Step2</Link>
        <Link to="/loop1-step3">Loop1Step3</Link>
        <Link to="/">Loop1Step4</Link>
        <Link to="/">Loop1Step5</Link>
        <Link to="/">Loop1Step6</Link>
        <Link to="/">Loop1Step7</Link>
        <Link to="/">Loop1Step8</Link>
        <Link to="/">Loop1Step9</Link>
        <Link to="/">Loop1Step10</Link>
      </div>
    </div>
  )
}

export default Directory

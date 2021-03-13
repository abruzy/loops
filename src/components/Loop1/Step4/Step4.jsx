import React, { useState } from 'react'

import './Step4.scss'

const steps = "Choose title, Choose description, Confirm data".split(", ");

const Loop1Step4 = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const goToStep = (index) => {
    if (index === 2 && activeStepIndex === 0) return;
    setActiveStepIndex(index);
  }
  const proceed = () => setActiveStepIndex(activeStepIndex + 1);
  const goBack = () => setActiveStepIndex(activeStepIndex - 1);

  return (
    <div className="Loop1Step4">
      <div className="wrapper">
        <div className="steps">
          {steps.map((step, index) => (
            <div
              onClick={() => goToStep(index)}
              className={`step ${activeStepIndex >= index ? "active" : ""}`}
              key={`loop1s4_step-${index}`}
            >
              <span className="number">{index + 1}</span>
              <span className="step-title">{step}</span>
            </div>
          ))}
        </div>

        <div className="steps-contents">
          {activeStepIndex === 0 && (
            <div>
              <p className="instruction">Choose title content</p>
              <button onClick={proceed}>Submit title</button>
            </div>
          )}
          {activeStepIndex === 1 && (
            <div>
              <p className="instruction">Choose description content</p>
              <button onClick={goBack}>Back</button>
              <button onClick={proceed}>Submit description</button>
            </div>
          )}
          {activeStepIndex === 2 && (
            <div>
              <p className="instruction">Are you happy now?</p>
              <button onClick={goBack}>No, Go back</button>
              <button>Yes, Go ahead</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Loop1Step4

import React, { useState, useEffect } from 'react'

import './Step5.scss'

const words = ["design", "frontend", "backend", "testing"];

const Loop1Step5 = () => {
  const [typed, setTyped] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    let currentWord = words[currentWordIndex];
    let currentWordPosition = 1;

    const interval = setInterval(() => {
      if (currentWordPosition > currentWord.length) {
        setTyped("");
        currentWordPosition = 1
        setCurrentWordIndex(currentWordIndex + 1)
      } else {
        setTyped(currentWord.substr(0, currentWordPosition));
        currentWordPosition++;
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex]);

  return (
    <div className="Loop1Step5">
      <h1>
        We can help with {typed}
        <span className="cursor" />
      </h1>
    </div>
  )
}

export default Loop1Step5

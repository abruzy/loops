import React, { useState, useEffect } from 'react'

import './Step5.scss'

const words = ["design", "frontend", "backend", "testing", " stop"];

const Loop1Step5 = () => {
  const [typed, setTyped] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    let currentWord = words[currentWordIndex];
    let currentWordPosition = 1;

    const interval = setInterval(() => {
      if (currentWordPosition > currentWord.length) {
        setTimeout(() => {
          setTyped("");
          currentWordPosition = 1
          setCurrentWordIndex(currentWordIndex + 1)
        }, 1000)
      } else {
        setTyped(currentWord.substr(0, currentWordPosition));

        if (currentWord.trim() === "stop") {
          setCurrentWordIndex(0)
        } else {
          currentWordPosition++
        }
      }
    }, 300);

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

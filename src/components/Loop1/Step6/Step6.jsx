import React, { useEffect, useState } from 'react'

import './Step6.scss'

const Loop1Step6 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = document.querySelector("body");
    el.addEventListener("mousemove", (e) => {
      setY(-e.clientX / 90);
      setX(-e.clientY / 90);
    });

    return () => {
      el.removeEventListener("mousemove", () => { });
    };
  }, []);

  return (
    <div className="Loop1Step6">
      <div
        className="box"
        style={{
          transform: `rotateX(${x}deg) rotateY(${y}deg)`
        }}
      />
    </div>
  )
}

export default Loop1Step6;

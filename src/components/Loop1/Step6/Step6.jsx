import React, { useEffect, useState } from 'react'

import './Step6.scss'

const Loop1Step6 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const winX = window.innerWidth / 2;
    const winY = window.innerHeight / 2;

    const el = document.querySelector("body");
    el.addEventListener("mousemove", (e) => {
      // setY((e.clientX - winX) / 90);
      // setX(-(e.clientY - winY) / 90);
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

import React, { useState } from 'react'

import './Step2.scss'

const contents = "positive,negative,neutral".split(",");

const Loop1Step2 = () => {
  const [index, setIndex] = useState(1);

  const changeIndex = (e) => {
    e.preventDefault();
    const index = parseInt(e.target.index.value, 10);
    if (Number.isNaN(index) || index > contents.length || index < 1) {
      alert("Not a valid index");
      return;
    }

    setIndex(index - 1);
    e.target.reset();
  };

  return (
    <div className="Loop1Step2">
      <div className="wrapper">
        <form onSubmit={changeIndex}>
          <input type="number" name="index" max={contents.length} placeholder="Enter tab index" />
          <button type="submit">Change tab</button>
        </form>
        <div className="content-tabs">
          {contents.map((content, contentIndex) => (
            <span
              onClick={() => setIndex(contentIndex)}
              key={`content-tab_${contentIndex}`}
              className={contentIndex === index ? "active" : ""}
            >
              {content}
            </span>
          ))}
        </div>

        <p>
          <span className="capitalize">{contents[index]}</span>{' '}
          <span>content</span>
        </p>
      </div>
    </div>
  )
}

export default Loop1Step2

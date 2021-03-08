import React, { useState } from 'react'

import './Step1.scss'

const sortOptions = "price name relevance".split(" ");

const Loop1Step1 = () => {
  const [sortBy, setSortBy] = useState("price");

  return (
    <div className="Loop1Step1">
      <div className="wrapper">
        <div className="tabs">
          {sortOptions.map((option, optionIndex) => (
            <span
              key={`sort-tab-by_${optionIndex}`}
              className={`tab ${option === sortBy ? "selected" : ""}`}
              onClick={() => setSortBy(option)}
            >
              Sort by {option}
            </span>
          ))}
        </div>

        <select
          className="sort"
          value={sortBy}
          onChange={(ev) => setSortBy(ev.target.value)}
        >
          {sortOptions.map((option, optionIndex) => (
            <option key={`select-sort_${optionIndex}`} value={option}>
              Sort by {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Loop1Step1

import React, { useState } from 'react'

import './Step4.scss'

const allData = [
  {
    title: "Choose title",
    id: 0,
    data: {
      subTitle: "Choose title content",
      action: [
        { text: "Submit title", route: "next" }
      ]
    }
  },
  {
    title: "Choose description",
    id: 1,
    data: {
      subTitle: "Choose description content",
      action: [
        { text: "Back", route: "back" },
        { text: "Submit description", route: "next" }
      ]
    }
  },
  {
    title: "Confirm data",
    id: 2,
    data: {
      subTitle: "Are you happy now?",
      action: [
        { text: "No, go back", route: "back" },
        { text: "Yes, go ahead", route: "next" }
      ]
    }
  },
  {
    title: "",
    id: 3,
    data: {
      subTitle: "Ok, we're done. Thanks for sending us your data!",
      action: []
    }
  },
]

const Loop1Step4 = () => {

  const [selectedTab, setSelectedTab] = useState(allData[0])

  const handleTransition = (item) => {

    if (
      item.id === selectedTab.id + 1
      ||
      item.id === selectedTab.id - 1
    ) {
      setSelectedTab(item)
    }

  }

  const handleActionClick = (action) => {
    console.log(selectedTab.id)
    if (
      action.route === "next"
      // && 
      // selectedTab.id < 2
    ) {
      setSelectedTab(allData[selectedTab.id + 1])
    } else if (action.route === "back") {
      console.log(allData[selectedTab.id - 1])
      setSelectedTab(allData[selectedTab.id - 1])
    } else if (selectedTab.id === 2 && action.route === "next") {
      setSelectedTab()
    }
  }

  return (
    <div className="Loop1Step4">
      <div className="wrapper">
        <div className="grid1">
          {allData.map((item, index) => (
            <div key={item.title} className={index < 3 ? "message" : ""} onClick={() => handleTransition(item)} >
              <span style={{ background: item.id === selectedTab.id ? "#2a80b9" : "#f8f8f8", color: item.id === selectedTab.id ? "#fff" : "#808080" }}>{index < 3 ? index + 1 : ""}</span>
              <p style={{ color: item.id === selectedTab.id ? "black" : "gray" }}>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="grid2">
          <p>{selectedTab.data.subTitle}</p>
          <div className="btns">
            {
              selectedTab.data.action.map(action => (
                <button className="btnBack" onClick={() => handleActionClick(action)} >{action.text}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loop1Step4

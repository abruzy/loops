import React, { useEffect, useState } from 'react'

import './Step7.scss'

const Loop1Step7 = () => {
  const [cards, setCards] = useState(Array.from(Array(5).keys(), n => n + 1));

  const handleScroll = () => {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;

    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setCards(prevState => ([...prevState, ...Array.from(Array(5).keys(), n => n + prevState.length + 1)]));
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Loop1Step7">
      {cards.map((card, cardIndex) => (
        <div key={`loop1s7_card-${cardIndex}`} className="card" />
      ))}
    </div>
  )
}

export default Loop1Step7

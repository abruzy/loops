import React, { useState } from 'react';

import './Step8.scss';

const Loop1Step8 = () => {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');

  return (
    <div className='Loop1Step8'>
      <div className='step8_wrapper'>
        <button
          onClick={() => {
            setSelectedButton('search');
            setOpen(!open);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setSelectedButton('run');
            setOpen(!open);
          }}
        >
          Run
        </button>
      </div>
      {selectedButton === 'search' ? (
        <div className={open ? 'overlay' : ''} onClick={() => setOpen(false)}>
          <div className={`sidenav ${open ? 'active' : ''}`}>
            <p>Whoa! You found me</p>
            <button onClick={() => setOpen(!open)}>Hide back</button>
          </div>
        </div>
      ) : selectedButton === 'run' ? (
        <div className={open ? 'overlay' : ''} onClick={() => setOpen(false)}>
          <div className={`sidenav ${open ? 'active' : ''}`}>
            <p>Please don't run me!</p>
            <button onClick={() => setOpen(!open)}>Close</button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Loop1Step8;

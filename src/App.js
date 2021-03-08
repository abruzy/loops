import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Routes from './Routes';

import './App.scss';

function App() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className='App'>
      <Routes />
      {location.pathname !== '/' && (
        <span onClick={() => history.goBack()} className='goBack'>
          back
        </span>
      )}
    </div>
  );
}

export default App;

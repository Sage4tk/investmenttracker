import React, { useState } from 'react';
import './App.css';
//components 
import Investments from './components/Investment';
import Watchlist from './components/Watchlist';

function App() {

  const [showlist, setshowlist] = useState(true);

  const investmentToggler = () => {
    setshowlist(true);
  }

  const watchToggler = () => {
    setshowlist(false);
  }

  return (
    <div>
      <div className="header">
        <p onClick={investmentToggler} className={(showlist ? 'active':'')}>Investments</p>
        <p onClick={watchToggler} className={(showlist ? '':'active')}>Watchlist</p>
      </div>
      <Investments showlist={showlist} />
      <Watchlist showlist={showlist} />
    </div>
  )
}

export default App;

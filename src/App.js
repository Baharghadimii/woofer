import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <div className="suggestion"></div>
    </div>
  );
}

export default App;

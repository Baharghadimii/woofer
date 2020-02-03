import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-layout"></div>
      <div className="suggestion"></div>
    </div>
  );
}

export default App;

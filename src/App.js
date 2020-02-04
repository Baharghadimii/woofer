import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Feed from './components/Explore/main/Feed';
import Suggestion from './components/Explore/right-bar/Suggestion';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Suggestion />
    </div>
  );
}

export default App;

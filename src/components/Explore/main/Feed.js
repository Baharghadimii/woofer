import React from 'react';
import './Feed.scss';
import SearchBar from './SearchBar';
import Tabs from './Tabs';

export default function Feed() {
  return (
    <div className="main-layout">
      <div className="search">
        <SearchBar />
      </div>
      <Tabs />
    </div>)
}
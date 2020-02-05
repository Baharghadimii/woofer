import React, { useState } from 'react';
import './Feed.scss';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
import Sports from './Sports';
import News from './News';
import ForYou from './ForYou';
import Entertainment from './Entertainment';
import Fun from './Fun';
import { getForYouFeed } from '../../../hooks/useDataApplication';

export default function Feed() {
  const [feed, setFeed] = useState('FY');

  const switchView = (value) => {
    if (value === 'NEWS') {
      setFeed('NEWS');
    } else if (value === 'SPRT') {
      setFeed('SPRT');
    } else if (value === 'FUN') {
      setFeed('FUN');
    } else if (value === 'ENTR') {
      setFeed('ENTR')
    } else {
      setFeed('FY');
    }

  }
  return (
    <div className="main-layout">
      <div className="search">
        <SearchBar />
      </div>
      <Tabs switchView={switchView} />
      {feed === 'FY' && <ForYou />}
      {feed === 'SPRT' && <Sports />}
      {feed === 'NEWS' && <News />}
      {feed === 'FUN' && <Fun />}
      {feed === 'ENTR' && <Entertainment />}
    </div>)
}
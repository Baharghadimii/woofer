import React from 'react';
import './Suggestion.scss';
export default function Suggestion() {
  return (
    <div className="suggestion">
      <div className="sug-list">
        <h2 className='sug-title'>Who to follow</h2>
        <div className="divider"></div>
        <SugListItem />
      </div>
    </div>)
}
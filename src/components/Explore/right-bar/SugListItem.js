import React from 'react';
import './SugListItem.scss'
export default function SugListItem(props) {
  return (
    <div className="lst-itm">
      <img className="img" src={props.img}></img>
      <div className="name">
        <a id='name'>{props.name}</a>
        <span id="id">{props.id}</span>
      </div>
      <button className='sug-btn'>Follow</button>
    </div>
  )

}
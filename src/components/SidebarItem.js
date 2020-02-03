import React from 'react';
import './SidebarItem.scss'
export default function SidebarItem(props) {
  return (
    <div className='side-item'>
      <img src={props.img} className="icon" />
      <h3>{props.name}</h3>
    </div >
  )
}
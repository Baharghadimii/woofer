import React from 'react';
import './Sidebar.scss';
import data from '../data/sidebar';
import SidebarItem from './SidebarItem';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src='https://woofer.s3.ca-central-1.amazonaws.com/logo.png' className="App-logo" alt="logo" />
      {data.map(item => {
        return (
          <SidebarItem name={item.name} img={item.icon} />
        )
      })}
      <button className='woof-btn'>Woof</button>
    </div>
  )
}
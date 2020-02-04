import React from 'react';
import './Searchbar.scss';
import { FaSearch } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'

export default function SearchBar() {
  return (
    <div className='search'>
      <button className='search-btn'>
        <FaSearch style={{ marginTop: '0.3rem' }} size={15} />
      </button>
      <input className="search-input" placeholder='Search Woofer'></input>
      <img className="setting" src="https://woofer.s3.ca-central-1.amazonaws.com/Asset+9.png" />
    </div>
  )
}
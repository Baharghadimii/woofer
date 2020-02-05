/* eslint-disable */
import React from 'react';
import './Suggestion.scss';
import SugListItem from './SugListItem';
import DropMenu from './DropMenu';
export default function Suggestion() {
  return (
    <div className="suggestion">
      <div className="sug-list">
        <h2 className='sug-title'>Who to follow</h2>
        <div className="divider"></div>
        <SugListItem name="Ermia" id="@ermi_foo" img="data:image/jpeg;base64,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" />
        <div className="divider"></div>
        <SugListItem name="Sean Hannity" id="@Sean123" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlabSUxYHe8itd8fxrRYglmFm-g17rcltRQaB-5cf8dsgoklPO" />
        <div className="divider"></div>
        <SugListItem name="Mary J" id="@MJ" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4pQHNv89blKX7ICetJf1OHOEyqSUYM23ALCqE_0MJVi6dZO7c" />
        <div className="divider"></div>
        <div className="sug-see-more">
          <a className="sug-see-more-anchor" >Show more</a>
        </div>
      </div>
      <div className="sug-menu" id="sug-main">
        <a className="sug-menu-anchor" >Terms</a>
        <a className="sug-menu-anchor" >Privacy policy</a>
        <a className="sug-menu-anchor" >Cookies</a>
        <a className="sug-menu-anchor" >Ads info</a>
        <a className="sug-menu-anchor" >More</a>
        <DropMenu />
        {/* <img className="sug-menu-icon" alt="menu-dropdown" id="sg-mn" onClick={handleMenu} src="https://woofer.s3.ca-central-1.amazonaws.com/Asset+11.png" /> */}
        <span className="sug-menu-sp">@ 2020 Woofer, Inc.</span>
      </div>
    </div>)
}
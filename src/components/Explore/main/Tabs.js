import React from 'react';
import './Tabs.scss';

export default function DisabledTabs(props) {

  const handleChange = (value) => {
    resetBorderBottomStyle();
    document.getElementById(value).style.borderBottom = '2px solid #cc6633';

  };
  const resetBorderBottomStyle = () => {
    document.getElementById('fy').style.borderBottom = '';
    document.getElementById('news').style.borderBottom = '';
    document.getElementById('sprt').style.borderBottom = '';
    document.getElementById('fun').style.borderBottom = '';
    document.getElementById('enter').style.borderBottom = '';
  }

  return (
    <div className='tabs'>
      <div className="tab" id="fy" onClick={() => handleChange('fy')}>
        <span className='tab-txt'>For you</span>
      </div>
      <div className="tab" id="news" onClick={() => handleChange('news')}>
        <span className='tab-txt'>News</span>
      </div>
      <div className="tab" id="sprt" onClick={() => handleChange('sprt')}>
        <span className='tab-txt'>Sports</span>
      </div>
      <div className="tab" id="fun" onClick={() => handleChange('fun')}>
        <span className='tab-txt'>Fun</span>
      </div>
      <div className="tab" id="enter" onClick={() => handleChange('enter')}>
        <span className='tab-txt'>Entertainment</span>
      </div>
    </div>
  )
}
import React from 'react';
import './Tabs.scss';
import Sports from './Sports';

export default function DisabledTabs(props) {

  const handleChange = (value) => {
    resetBorderBottomStyle();
    document.getElementById(value).style.borderBottom = '2px solid #cc6633';
    props.setFeed(value)
  };
  const resetBorderBottomStyle = () => {
    document.getElementById('FY').style.borderBottom = '';
    document.getElementById('NEWS').style.borderBottom = '';
    document.getElementById('SPRT').style.borderBottom = '';
    document.getElementById('FUN').style.borderBottom = '';
    document.getElementById('ENTR').style.borderBottom = '';
  }

  return (
    <div className='tabs'>
      <div className="tab" id="FY" onClick={() => handleChange('FY')}>
        <span className='tab-txt'>For you</span>
      </div>
      <div className="tab" id="NEWS" onClick={() => handleChange('NEWS')}>
        <span className='tab-txt'>News</span>
      </div>
      <div className="tab" id="SPRT" onClick={() => handleChange('SPRT')}>
        <span className='tab-txt'>Sports</span>
      </div>
      <div className="tab" id="FUN" onClick={() => handleChange('FUN')}>
        <span className='tab-txt'>Fun</span>
      </div>
      <div className="tab" id="ENTR" onClick={() => handleChange('ENTR')}>
        <span className='tab-txt'>Entertainment</span>
      </div>
    </div>
  )
}
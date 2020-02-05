import React from 'react';
import './Tabs.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>
        <div className="tab" id="fy" onClick={() => handleChange('fy')}>
          <Link to='/'>
            <span className='tab-txt'>For you</span>
          </Link>
        </div>
      </Router>
      <Router>
        <div className="tab" id="news" onClick={() => handleChange('news')}>
          <Link>
            <span className='tab-txt'>News</span>
          </Link>
        </div>
      </Router>
      <Router>
        <div className="tab" id="sprt" onClick={() => handleChange('sprt')}>
          <Link>
            <span className='tab-txt'>Sports</span>
          </Link>
        </div>
      </Router>
      <Router>
        <Link>
          <div className="tab" id="fun" onClick={() => handleChange('fun')}>
            <span className='tab-txt'>Fun</span>
          </div>
        </Link>
      </Router>
      <Router>
        <Link>
          <div className="tab" id="enter" onClick={() => handleChange('enter')}>
            <span className='tab-txt'>Entertainment</span>
          </div>
        </Link>

      </Router>

    </div>
  )
}
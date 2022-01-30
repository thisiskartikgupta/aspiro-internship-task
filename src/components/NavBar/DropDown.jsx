/*eslint-disable*/
import React, {useState} from 'react';
import ArrowDownSVG from '../../assets/svg/arrow_down.svg';

import './DropDown.css';

const DropDown = () => {
  const data = ['EN', 'FR', 'HI'];
  const [showHidden, setShowHidden] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="dropdown">
      <div className="display">
        <div className="selected-item">{data[selectedIndex]}&nbsp;&nbsp;&nbsp;</div>
        <img className={!showHidden ? 'img' : 'img reverse'} 
             src={ArrowDownSVG}
             onClick={() => setShowHidden(!showHidden)}/>
      </div>
      <div className="dropdown details">
        {/* {showHidden ? "dikhao" : <div></div>} */}
      </div>
    </div>
  );
};

export default DropDown;

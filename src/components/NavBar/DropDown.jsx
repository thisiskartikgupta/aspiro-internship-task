/*eslint-disable*/
import React, {useState} from 'react';
import arrowDown from '../../assets/svg/arrow_down.svg';

import './DropDown.css';

const DropDown = () => {
  const data = ['EN', 'FR', 'HI'];
  const [showHidden, setShowHidden] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="DropDown">
      <div className="display">
        <div className="selected">{data[selectedIndex]}&nbsp;&nbsp;&nbsp;</div>
        <img className={showHidden ? 'img' : 'img reverse'} 
             src={arrowDown}
             onClick={() => setShowHidden(!showHidden)}/>
      </div>
      {/* {showHidden ? "dikhao" : <div></div>} */}
    </div>
  );
};

export default DropDown;

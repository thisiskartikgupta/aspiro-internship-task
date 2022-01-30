
import React from 'react';

import CircleLeftSVG from '../../assets/svg/circle_left.svg';
import CircleRightSVG from '../../assets/svg/circle_right.svg';
import SubscribeSendSVG from '../../assets/svg/subscribe_send.svg';
import SubscribeStarsSVG from '../../assets/svg/subscribe_stars.svg';

import './SubscribeSection.css';


const SubscribeSection = () => {
  return (
    <div id="subscribe" className="subscribe-box">
      <img className="send-svg" src={SubscribeSendSVG}/>
      <div className="subscribe-box-text">
        Subscribe to get information, latest news and other <br/>
         interesting offers about Cobham
      </div>
      <img className="c-left-svg" src={CircleLeftSVG}/>
      <img className="c-right-svg" src={CircleRightSVG}/>
      <div className="subscribe-box-input">
        <input placeholder="Your Email"></input>
        <button>Subscribe</button>
      </div>
      <img className="subscribe-stars-svg" src={SubscribeStarsSVG}/>
    </div>
  );
};

export default SubscribeSection;


import React from 'react';

import CircleLeftSVG from '../../assets/svg/circle_left.svg';
import CircleRightSVG from '../../assets/svg/circle_right.svg';
import SubscribeSendSVG from '../../assets/svg/subscribe_send.svg';
import SubscribeStarsSVG from '../../assets/svg/subscribe_stars.svg';
import MailSVG from '../../assets/svg/mail.svg';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './SubscribeSection.css';


const SubscribeSection = () => {
  const notify = () => toast.success('You have subscribed successfully', {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <>
      <div id="subscribe" className="subscribe-box">
        <img className="send-svg" src={SubscribeSendSVG}/>
        <div className="subscribe-box-text">
          Subscribe to get information, latest news and other <br/>
          interesting offers about Cobham
        </div>
        <img className="c-left-svg" src={CircleLeftSVG}/>
        <img className="c-right-svg" src={CircleRightSVG}/>
        <div className="subscribe-box-input">
          <div className="subscribe-boxinput_container">
            <input type="text" className="input" placeholder="Your email"/>
            <img src={MailSVG} className="input_img"/>
          </div>
          <button className="subscribe-btn"
            onClick={notify}
          >Subscribe</button>
        </div>
        <img className="subscribe-stars-svg" src={SubscribeStarsSVG}/>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default SubscribeSection;

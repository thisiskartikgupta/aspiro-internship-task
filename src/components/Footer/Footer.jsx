
import React from 'react';

import FacebookSVG from '../../assets/svg/footer_facebook.svg';
import InstagramSVG from '../../assets/svg/footer_instagram.svg';
import TwitterSVG from '../../assets/svg/footer_twitter.svg';
import PlayStoreSVG from '../../assets/svg/footer_googleplay.svg';
import AppleStoreSVG from '../../assets/svg/footer_applestore.svg';

import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="column-1">
        <div className="jadoo">Jadoo.</div>
        <div className="jadoo-subheading">
          Book your trip in minute, get full Control for much longer.
        </div>
      </div>
      <div className="column-2">
        <div className="heading">Company</div>
        <div className="items">About</div>
        <div className="items">Careers</div>
        <div className="items">Mobile</div>
      </div>
      <div className="column-2">
        <div className="heading">Contact</div>
        <div className="items">Help/FAQ</div>
        <div className="items">Press</div>
        <div className="items">Affilates</div>
      </div>
      <div className="column-2">
        <div className="heading">More</div>
        <div className="items">Airlinefees</div>
        <div className="items">Airline</div>
        <div className="items">Low Fare tips</div>
      </div>
      <div className="column-3">
        <img src={FacebookSVG} alt="Facebook"/>
        <img className="instagram" src={InstagramSVG} alt="Instagram"/>
        <img src={TwitterSVG} alt="Twitter"/>
        <div className="discover-our-app">Discover our app</div>
        <img src={PlayStoreSVG} alt="Play Store"/>
        <img src={AppleStoreSVG} alt="Apple Store"/>
      </div>
    </div>
  );
};

export default Footer;

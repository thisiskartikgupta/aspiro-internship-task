
import React from 'react';

import BookATripSVG from '../../assets/svg/bookatrip.svg';
import BookATripStep1SVG from '../../assets/svg/bookatrip1.svg';
import BookATripStep2SVG from '../../assets/svg/bookatrip2.svg';
import BookATripStep3SVG from '../../assets/svg/bookatrip3.svg';
import './BookATripSection.css';

const BookATripSection = () => {
  return (
    <div id="book-a-trip" className="bookatrip-section">
      <div>
        <div className="category">Easy and Fast</div>
        <div className="subheading">Book Your Next Trip</div>
        <div className="subheading">In 3 Easy Steps</div>
        <div className="step-container">
          <div className="step">
            <img className="step-image" src={BookATripStep1SVG}/>
            <div className="step-detail">
              <div className="step-heading">Choose Destination</div>
              <div className="step-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Urna, tortor tempus.
              </div>
            </div>
          </div>

          <div className="step">
            <img className="step-image" src={BookATripStep2SVG}/>
            <div className="step-detail">
              <div className="step-heading">Make Payment</div>
              <div className="step-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Urna, tortor tempus.
              </div>
            </div>
          </div>

          <div className="step">
            <img className="step-image" src={BookATripStep3SVG}/>
            <div className="step-detail">
              <div className="step-heading">Reach Airport on Selected Date</div>
              <div className="step-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Urna, tortor tempus.
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <img className="book-a-trip-svg" src={BookATripSVG}/>
      </div>
    </div>
  );
};

export default BookATripSection;

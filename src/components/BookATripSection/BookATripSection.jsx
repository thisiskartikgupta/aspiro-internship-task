
import React from 'react';

import BookATripSVG from '../../assets/svg/bookatrip.svg';
import BookATripStep1SVG from '../../assets/svg/bookatrip1.svg';
import BookATripStep2SVG from '../../assets/svg/bookatrip2.svg';
import BookATripStep3SVG from '../../assets/svg/bookatrip3.svg';

import './BookATripSection.css';

const BookATripSection = () => {
  return (
    <div className="bookatrip-section">
      <div>
        <div className="category">Easy and Fast</div>
        <div className="subheading">Book Your Next Trip</div>
        <div className="subheading">In 3 Easy Steps</div>

        <div className="step-container">
          <div>
            <img className="" src={BookATripStep1SVG}/>
            <div>
              <div>Choose Destination</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Urna, tortor tempus.
              </div>
            </div>
          </div>

          <div>
            <img src={BookATripStep2SVG}/>
            <div>
              <div>Choose Destination</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Urna, tortor tempus.
              </div>
            </div>
          </div>

          <div>
            <img src={BookATripStep3SVG}/>
            <div>
              <div>Choose Destination</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Urna, tortor tempus.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={BookATripSVG}/>
      </div>
    </div>
  );
};

export default BookATripSection;

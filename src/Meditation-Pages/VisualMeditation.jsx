import React from 'react';
import NavbarMH from '../user-pages/mental_health/NavbarMH';
import { AudioPlayer } from '../components/AudioPlayer';
import audioFile11 from '../audio-files/GuidedMeditation11.mp3';


const VisualMeditation = () => {
  return (
    <>
      <NavbarMH />
      <div className="med-type-container">
        <div className="med-type-heading">
          <div className="med-info-audio-container">
            hey this is audio section
            <AudioPlayer audioFile={audioFile11} />
          </div>
        </div>
        <div className="med-type-img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="med-type-getting-started">
        <div className="med-type-getting-started-img">
          <img src="" alt="" />
        </div>
        <div className="start-with-the-basics">
          <h1>Start with the basics</h1>
          <h4>
            Start your meditation practice with a 10-day beginner’s course —
            available in the Headspace app during your free trial.
          </h4>
        </div>
      </div>
      .med-type-main-audio-started
    </>
  );
}

export default VisualMeditation

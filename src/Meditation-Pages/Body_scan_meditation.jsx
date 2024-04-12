import React from 'react';
import NavbarMH from '../user-pages/mental_health/NavbarMH';
import Footer from '../footer/Footer';
import '../Meditation-Pages/meditation-pages.css';
import Body_scan_meditation_img from '../images/Body_scan_meditation_img.png';

const Expert_Guidance = () => {
  return (
    <>
      <NavbarMH />
      <div className="content-container">
        <h1>It increases Mind-Body Awareness, Relaxation Response and Non-judgmental Observation</h1>
        <div className="article-section">
          <div className="p-article-section">
            <p>
            Body scan meditation is a powerful technique for reducing stress and promoting relaxation by bringing awareness to the sensations present in different parts of the body. To begin, find a comfortable position either sitting or lying down, and gently close your eyes if it feels comfortable. Start by taking a few deep breaths, allowing yourself to settle into the present moment.       
            <img src={Body_scan_meditation_img} alt="" />
            <br /><br /><br />
            Begin to bring your attention to your feet. Notice any sensations you may feel—tingling, warmth, or pressure. Without judgment, simply observe these sensations for a few moments before moving your attention to your ankles and calves. Continue to scan up through your legs, thighs, hips, and pelvis, noticing any areas of tension or tightness.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Expert_Guidance;

import React from 'react';
import NavbarMH from '../user-pages/mental_health/NavbarMH';
import Footer from '../footer/Footer';
import '../Meditation-Pages/meditation-pages.css';
import Gratitude_meditation_img from '../images/Gratitude_meditation_img.png';

const Gratitude_meditation = () => {
  return (
    <>
      <NavbarMH />
      <div className="content-container">
        <h1>Gratitude meditation cultivates happiness by focusing on what you appreciate in life.</h1>
        <div className="article-section">
          <div className="p-article-section">
            <p>
            Gratitude meditation is a practice that involves cultivating a sense of gratitude and appreciation for the present moment and the blessings in our lives. To begin a gratitude meditation, find a comfortable position either sitting or lying down, and gently close your eyes if it feels comfortable. Start by taking a few deep breaths, allowing yourself to settle into the present moment. Take a moment to reflect life.
            <img src={Gratitude_meditation_img} alt="" />
            <br /><br /><br />
            This could be anything from the people in your life, to your health, to the simple pleasures of everyday life.
            As you bring these things to mind, allow yourself to truly feel the gratitude and appreciation for each one. Notice how it feels in your body to experience this sense of gratitude, and allow yourself to bask in the warmth and positivity that it brings.
            You can also use your breath as an anchor for your gratitude practice, taking a deep breath in as you think of something you are grateful for, and exhaling fully as you release any tension or stress.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gratitude_meditation;

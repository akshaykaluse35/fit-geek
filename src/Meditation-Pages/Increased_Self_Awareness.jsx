import React from 'react';
import NavbarMH from '../user-pages/mental_health/NavbarMH';
import Footer from '../footer/Footer';
import '../Meditation-Pages/meditation-pages.css';
import Increased_Self_Awareness_img from '../images/Increased_Awareness_img.png';

const Increased_Self_Awareness = () => {
  return (
    <>
      <NavbarMH />
      <div className="content-container">
        <h1>Meditation can foster a deeper understanding of your thoughts, feelings, and patterns.</h1>
        <div className="article-section">
          <div className="p-article-section">
            <p>
            Meditation acts as a gentle yet powerful mirror, reflecting back the intricate tapestry of our inner world with clarity and compassion. Through the practice of quiet introspection, individuals can embark on a journey of self-discovery, delving deep into the recesses of their minds to uncover the hidden truths that lie beneath the surface.               <br /><br />
              <img src={Increased_Self_Awareness_img} alt="" />
              <br /><br /><br />
              With each moment of mindful awareness, practitioners can observe the ceaseless flow of thoughts and feelings that dance across the canvas of consciousness, gaining insight into the patterns and tendencies that shape their lives. As the layers of conditioning and habit begin to peel away, individuals may find themselves encountering aspects of themselves that were previously obscured from view, revealing the raw beauty and vulnerability that lies at the core of their being.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Increased_Self_Awareness;

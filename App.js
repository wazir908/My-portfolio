import React from 'react';
import Header from './header';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import SlickCarousel from './slick-carousel'; 
import ResumeSection from './resumesection';
import PortfolioCarousel from './portfoliocarousel'
import BackToTopButton from './backtotopbutton';
import Skills from './skills';
import CounterSection from './countersection';
import ProjectDesc from './projectdesc';
import Sidebar from './sidebar';
import Footer from './footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <LandingPage/>
      <AboutMe/>
      <SlickCarousel /> {/* Include SlickCarousel component */}
      <ResumeSection/>
      <PortfolioCarousel/>
      <BackToTopButton/>
      <Skills/>
      <CounterSection />
      <ProjectDesc/>
      <Sidebar/>
      <Footer/>
 
     </div>
  );
}

export default App;
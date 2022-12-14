import React from 'react';
import './App.css';

//Importing Components
import Navbar from './components/Navbar'
import LoadScreen from "./components/LoadScreen";
import ThemeHeading from './components/ThemeHeading';
import About from './components/About';
import EventCommittee from './components/EventCommittee';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Agenda from './components/Agenda';
import Register from './components/Register';
import BreakoutSessions from './components/BreakoutSessions';
import EmploymentPanel from './components/EmploymentPanel';
import Keynote from './components/Keynote';
import Testimonial from './components/Testimonial';
import Career from './components/Career';



function App() {

  return (
    <div className="App">
      <Navbar />
      <LoadScreen />
      <Testimonial />
      <ThemeHeading />
      <About />
      <EventCommittee />
      <Sponsors />
      <Agenda />


      <Keynote />
      <BreakoutSessions />
      <EmploymentPanel />
      <Career />

      <Register />
      <Footer />
    </div>
  );
}

export default App;

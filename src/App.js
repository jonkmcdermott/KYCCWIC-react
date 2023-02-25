// import React from 'react';
import React, {useState, useEffect} from 'react';
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
import RegClosed from './components/RegClosed';



function App() {

  //Show registration closed section after reg closed date
  const [closeRegistration, setCloseRegistration] = useState(false);
  useEffect(() => {
    //Change on March 2nd 20023 at 8:00 AM CST
    const closeDate = new Date("2023-03-02T08:00:00-06:00");
    const todayDate = new Date();
    const close = todayDate >= closeDate;
    setCloseRegistration(close);
  }, []);

  const registrationSection = closeRegistration ? (
    <RegClosed />
  ) : (
    <Register />
  );

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

      {/* <Register /> */}
      {registrationSection}
      <Footer />
    </div>
  );
}

export default App;

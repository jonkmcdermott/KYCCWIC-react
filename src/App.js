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

function App() {

  return (
    <div className="App">
      <Navbar />
      <LoadScreen />
      <ThemeHeading />
      <About />
      <EventCommittee />
      <Sponsors />


      <Footer />
    </div>
  );
}

export default App;

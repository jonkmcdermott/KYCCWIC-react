import React from 'react'
import './Keynote.css'
import KeynoteData from './data/Keynote.json'
// import {motion} from 'framer-motion'
// import { useRef, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DisplayKeynoteSpeakers() {
  // const [carouselWidth, setCarouselWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  const KeynoteSpeakers = KeynoteData.map((keynote_speaker) =>
  //   <motion.div key={keynote_speaker.id} className="keynote-speaker">

  //     {keynote_speaker.image_exists ? 
  //       <div className="keynote-image-container">
  //         <img className="keynote-image" src={require(""+keynote_speaker.image+"")} alt={keynote_speaker.title} />
  //       </div>
  //       : 
  //       ""
  //     }
  //     <div className="keynote-bio">
  //       <h3>{keynote_speaker.title}</h3>
  //       <p className='text-block'>{keynote_speaker.bio}</p>
  //     </div>
      

  //   </motion.div>

    <div key={keynote_speaker.id} id={keynote_speaker.id} className="keynote-speaker">
      {keynote_speaker.image_exists ? 
        <div className="keynote-image-container">
          <img className="keynote-image" src={require(""+keynote_speaker.image+"")} alt={keynote_speaker.title} />
        </div>
        : 
        ""
      }

      <div className="keynote-bio">
        <h3>{keynote_speaker.title}</h3>
        <p className="text-block">{keynote_speaker.bio}</p>
      </div>
    </div>
  );

  return (
    // <motion.div ref={carousel} className="outer-carousel" whileTap={{cursor: "grabbing"}}>
    //   <motion.div drag="x" dragConstraints={{right: 0, left: -carouselWidth}} className="inner-carousel">
    //     {KeynoteSpeakers}
    //   </motion.div>
    // </motion.div>
    <Carousel className='keynote-carousel'>
      {KeynoteSpeakers}
    </Carousel>
  );
}

function Keynote() {
  return (
    <div id="keynote" className='full-screen-container keynote-container'>
        <div className="centered-full-screen-content keynote-content-shell">
            <div className="keynote-content container">
                <h2>Keynote Speakers</h2>

                {DisplayKeynoteSpeakers()}
            </div>
        </div>
    </div>
  )
}

export default Keynote

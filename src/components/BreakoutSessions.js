import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp, FaTimes} from 'react-icons/fa'
import './SpeakerCard.css'

const url_header = "./assets/BreakoutSessions/"

function DisplaySpeakerCard(speaker_id, speaker_title, speaker_bio) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const changeIsCardVisible = () => setIsCardVisible(!isCardVisible)

  return (
    <div className="speaker-card" key={speaker_id} id={speaker_id}>

      <div className="speaker-image-container">
        <img className="speaker-image" src={require(url_header + speaker_id + ".jpg")}/>
      </div>

      <div className="speaker-content-container">
        <p className='speaker-title'>{speaker_title}</p>
        <div onClick={changeIsCardVisible} className="show-speaker-info">
          {isCardVisible ? 
            (<FaChevronUp className='speaker-icon' />) 
            : (<FaChevronDown className='speaker-icon'/>)
          }
        </div>

        <div className={isCardVisible ? "speaker-bio-container" : "speaker-bio-container speaker-content-hidden"}>
          <p className='speaker-bio-text'>{speaker_bio}</p>
          <div className='card-close-div'>
            <FaTimes onClick={changeIsCardVisible} className='speaker-icon close-speaker-card' />
          </div>
        </div>
      </div>

    </div>
  );
}


function BreakoutSessions() {
  return (
    <div className='container' id='breakout'>
      <h1>Breakout Session Speakers</h1>

      <div className="speaker-cards-layout">
        {DisplaySpeakerCard(
          'andy_mills',
          'Andy Mills',
          'I exist.'
        )}

        {DisplaySpeakerCard(
          'art_mcfadden',
          'Art McFadden',
          'I exist.'
        )}

        {DisplaySpeakerCard(
          'casey_wilhelm',
          'Casey Wilhelm',
          'I exist.'
        )}

        

        {DisplaySpeakerCard(
          'lois_mcwhorter',
          'Lois McWhorter',
          'I exist.'
        )}



      </div>

    </div>
  )
}

export default BreakoutSessions

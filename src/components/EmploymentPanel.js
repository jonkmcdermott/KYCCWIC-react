import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp, FaTimes} from 'react-icons/fa'
import './SpeakerCard.css'

const url_header = "./assets/EmploymentPanel/"

function DisplaySpeakerCard(speaker_id, speaker_title, speaker_bio) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const changeIsCardVisible = () => setIsCardVisible(!isCardVisible)

  return (
    <div className="speaker-card" key={speaker_id} id={speaker_id}>

      <div className="speaker-image-container">
        <img src={require(url_header + speaker_id + ".jpg")}/>
      </div>

      <div className="speaker-content-container">
        <p className='speaker-title'>{speaker_title}</p>
        <p className='speaker-bio-text'>{speaker_bio}</p>
      </div>

    </div>
  );
}

function EmploymentPanel() {
  return (
    <div className='container' id='employment'>
      <h1>Employment Panel Speakers</h1>
    </div>
  )
}

export default EmploymentPanel

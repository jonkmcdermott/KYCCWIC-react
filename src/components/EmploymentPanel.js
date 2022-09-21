import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp, FaTimes} from 'react-icons/fa'
import './SpeakerCard.css'
import placeholder from './assets/placeholder.jpg'

const url_header = "./assets/EmploymentPanel/"

function DisplaySpeakerCard(speaker_id, speaker_title, speaker_bio, image_exists) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const changeIsCardVisible = () => setIsCardVisible(!isCardVisible)

  return (
    <div className="speaker-card" key={speaker_id} id={speaker_id}>

      <div className="speaker-image-container">
        {image_exists ?
          <img className="speaker-image" src={require(url_header + speaker_id + ".jpg")} alt={speaker_title}/>
        :
        <img className="speaker-image" src={placeholder} alt='Placeholder for missing speaker'/>
        }
        
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
          <div className={isCardVisible ? "speaker-modal-container" : "speaker-modal-container speaker-content-hidden"}>
            <p className='speaker-bio-text'>{speaker_bio}</p>
            <div className='card-close-div'>
              <FaTimes onClick={changeIsCardVisible} className='speaker-icon close-speaker-card' />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function EmploymentPanel() {
  return (
    <div className='container' id='employment'>
      <h1>Employment Panel Speakers</h1>

      <div className="speaker-cards-layout">


      </div>
      
    </div>
  )
}

export default EmploymentPanel

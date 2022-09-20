import React, {useState} from 'react'
import './Keynote.css'
import './SpeakerBios.css'
import KeynoteData from './data/Keynote.json'

const SpeakerBioModal = (bio) => {
  return (
    <div className='speaker-bio'>
      <p>{bio}</p>
    </div>
    
  );
}


function DisplayKeynoteSpeakers() {

  const [showBio, setShowBio] = useState(false)
  const handleShowBio = () => setShowBio(!showBio)

  const KeynoteSpeakers = KeynoteData.map((keynote_speaker) =>

    <div className='speaker-container' key={keynote_speaker.id} id={keynote_speaker.id}>
      {keynote_speaker.image_exists ? 
        <div className='speaker-image-container'>
          <img className='speaker-image' src={require(""+keynote_speaker.image+"")} alt={keynote_speaker.title} />
        </div>
        : 
        ""
      }

      <div>
        <h3 className='speaker-title'>{keynote_speaker.title}</h3>
        
        <div>
          <button onClick={e=> {handleShowBio()}} className="btn-speaker-bio">
            Read Bio
          </button>
          
          <div className={showBio ? 'speaker-bio-show' : 'speaker-bio-hidden'}>
            {SpeakerBioModal(keynote_speaker.bio)}
          </div>


          
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {KeynoteSpeakers}
    </div>
  );
}

function Keynote() {
  return (
    <div id="keynote">
        <div>
            <div className='container'>
                <h2>Keynote Speakers</h2>

                {DisplayKeynoteSpeakers()}
            </div>
        </div>
    </div>
  )
}

export default Keynote

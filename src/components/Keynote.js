import React from 'react'
import './Keynote.css'
import KeynoteData from './data/Keynote.json'

function DisplayKeynoteSpeakers() {
  const KeynoteSpeakers = KeynoteData.map((keynote_speaker) =>
    <div className="keynote-speaker">
      <h1>I'm a Keynote Speaker</h1>
    </div>
  );

  return (
    <div>{KeynoteSpeakers}</div>
  );
}

function Keynote() {
  return (
    <div id="keynote" className='full-screen-container keynote-container'>
        <div className="centered-full-screen-content keynote-content-shell">
            <div className="keynote-content container">
                <h3>Keynote Speakers</h3>

                {DisplayKeynoteSpeakers()}
            </div>
        </div>
    </div>
  )
}

export default Keynote

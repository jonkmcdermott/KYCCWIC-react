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

        {DisplaySpeakerCard(
          'robin_amonett',
          'Robin Amonett',
          'Robin Amonett is the HR Manager at Performance FoodService (PFS) located in South Industrial Park in Bowling Green.  PFS is a leading food distributor and supplier providing quality products, innovative technology and custom solutions to culinary partners.  PFS delivers over 200,000 products to more than 125,000 customers nationwide.  Nationwide, PFS employees over 18,000 associates and locally employees nearly 200 associates. \n Robin is currently the Board Chair of the Training Consortium of South-Central Kentucky.  She sits on South Central Workforce Development Board.  She routinely volunteers with the Bowling Green Area Chamber of Commerce and Junior Achievement.',
          false
        )} 

        {DisplaySpeakerCard(
          'monica_duvall',
          'Monica Duvall',
          'Monica earned her marketing degree from WKU\'s Gordon Ford College of Business in 2005 and her Master\'s in Organizational Leadership in 2019. Previously, she served as Marketing Manager for Reinhart Food Service and Southern Foods in Bowling Green, KY from 2007-2016. In her role as the GFCB Director of Student Success, Monica oversees the GFCB Student Success Team/Initiatives, including GFCB academic advising, Business LLC, Recruitment/Retention, and Career Development.  She also leads the GFCB internship program and PEAK program, both of which ensure our students are prepared for entry into the professional business environment. \n She is an active board member of Junior Achievement of South Central Kentucky and was honored to receive the National Junior Achievement Gold Leadership Award in 2021. Monica also serves on the Housing Corporation Board for the Chi Theta chapter of Chi Omega Sorority at WKU, and is a past Chi Omega advisor and WKU Randy Bracey Outstanding Advisor award recipient, 2017.  \n Personally, she is married to Brian and they have two children, Emory and Callie. Monica enjoys exercising, golfing, traveling, watching her girls play sports, and spending time with her family.',
          true
        )} 

        {DisplaySpeakerCard(
          'allie_lee',
          'Allie Lee',
          'Allie Lee is a Human Resources Administrator at Scotty\'s Contracting & Stone in Bowling Green, KY and has been in human resources for a year now. Allie earned her Bachelor of Science in Accounting from Western Kentucky University in 2017 and a Master of Business Administration from the University of Southern Indiana in 2021. She started her career at Scotty\'s as an intern in the accounting department while attending WKU and eventually went full-time with Scotty\'s in their Accounts Receivable Department. She loves her new job in Human Resources and has enjoyed learning a new side to the business. In her spare time you will catch her either chasing after her daughter or doing yoga at Flō House Yoga.',
          true
        )} 

        {DisplaySpeakerCard(
          'jessica_nations',
          'Jessica Nations',
          'More info coming soon!',
          true
        )} 

        {DisplaySpeakerCard(
          'tamara_storm',
          'Tamara Storm',
          'Tamara Strom, MSA, is an Instructor in the Department of Management. Tamara earned her Masters of Science in International Business from Central Michigan University. She has held numerous leadership positions in Manufacturing/Production, Supply Chain Management, and Fulfillment/Distribution. Her industrial experience includes management roles at Amazon, B/E Aerospace, BAE Systems and General Motors. Tamara has successful experience in product launches, lean system implementations, supplier management and management training/development. Her husband, Matt, works for General Motors as a Sr. Process Engineer, and she has twin sons who attend Greenwood High School.',
          true
        )} 

      </div>
      
    </div>
  )
}

export default EmploymentPanel

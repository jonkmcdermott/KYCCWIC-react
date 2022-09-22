import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp, FaTimes} from 'react-icons/fa'
import './SpeakerCard.css'
import placeholder from './assets/placeholder.jpg'

const url_header = "./assets/Keynote/"

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

function Keynote() {
  return (
    <div className='container' id='keynote'>
      <h1>Keynote Speakers</h1>

      <div className="speaker-cards-layout">

        {DisplaySpeakerCard(
          'jennifer_holmes',
          'Jennifer Holmes',
          // eslint-disable-next-line
          'Jennifer Holmes is a visionary, strategic and results-driven senior executive leader with 25+ years of MedTech and medical device experience leading US & Global commercial sales, turning-around and growing revenues, succession planning, leading change management initiatives, strategic planning, implementing operational plans & process improvement, digital marketing & branding, P&L management and guiding M&A initiatives while transforming corporate cultures.  She is passionate about recruiting, mentoring and growing top talent, especially female leaders and is authentic about diversity in the workplace.  \n Jennifer currently serves as the Chief Executive Officer at Rehab Boost, Inc., a healthcare SaaS IT patient rehabilitation AI platform that gives real-time visibility to patients and physical therapist critical data.   \n Prior to joining Rehab Boost, she served as Chief Executive Officer at MDsyncNET a physician on-call scheduling software SaaS solution where she was responsible for leading the company\'s US and global commercial strategy. \n In early 2018, she co-founded and serves as Managing Director at Holson Consulting LLC, a management consulting firm. She has helped numerous companies bridge the gap between strategy and execution. Over the past three years, she has worked with private equity firms, early stage medical device startups, high growth early stage SaaS IT technology and mid-cap public companies. Most recently, she served as the Strategic Partnership Officer and Senior Vice President at Proximo Medical.  Proximo partners and helps early-stage medical device and MedTech SaaS IT companies commercialize their devices and IT SaaS technology in the US.  \n Prior to Holson Consulting, Jennifer served as Board Chairman & Chief Executive Officer at Central Logic, a private equity backed healthcare SaaS IT company, based in Salt Lake City, UT.  A leading innovative healthcare technology solution focused on patient flow and physician on-call scheduling software that provides healthcare systems meaningful AI, real-time data analytics, visibility into a patient\'s journey to enhancing patient outcomes and care-coordination.  \n During her first year at Central Logic, she successfully closed an $8M Series C-round of growth capital.  That same year, the company\'s revenue grew 117% and her team achieved 100% of the Operating Plan and P&L Budget.  In her second year, the company\'s revenue grew 66% over the prior year.  Shortly after joining Central Logic, the company launched three disruptive SaaS IT solutions that positively changed the growth trajectory for the following year.  The company was recognized in 2016 by Fierce Innovation Award Finalist for CL Patient Connect.  For two years in a row, Central Logic was recognized by Modern Healthcare as the Top 100 Best Places to Work in Healthcare.  During Jennifer\'s tenue she received numerous awards and honors including being named by Becker\'s Hospital Review as One of The Top 17 \”Female Health IT Company CEOs to Know\” and she was one of five 2016 Finalists for the Women Tech Council, Utah Tech Awards.  \n Before joining Central Logic, Jennifer was the Senior Vice President, Enterprise Sales at MedAssets, an $800M public healthcare, supply chain, group purchasing organization (GPO), revenue cycle management, consulting services and technology solutions company.  Over her career, she has held numerous senior executive leadership roles with \”blue chip, mid-cap, private equity, and venture backed startup companies like; Boston Scientific, Heartport, (Johnson & Johnson) Guidant Corporation (Abbott), EKOS (exit BTG & Boston Scientific) Spectranetics (Philips) and HeartFlow.  \n In 2010, Jennifer founded Integrating Woman Leaders, Inc., where she served as President & CEO for five years. Her dream was realized at year five when IWL, Inc. received approval to form a 501(c) IWL Foundation. For nine years, she served as Chairman of the Board of the IWL Foundation, now a globally recognized nonprofit organization. The foundation focuses on the advancement of women in the workplace, as well as leading robust diversity & inclusion initiatives. Over the past 11 years, more than 10,000+ women and men have attended the annual IWL Women\'s Leadership Conferences and participated in yearlong leadership development and training programs.  \n Jennifer is a thoughtful leader, an accomplished healthcare executive, keynote speaker and sought-after presenter on topics like; Women in Healthcare Tech, Diversity & Inclusion in Healthcare, Unconscious Bias in the Workplace, Advancing Women Leaders and Why Women Matter to YOUR Bottom Line and the Power of Mentoring Women.  She participated and was the Keynote speaker at the 2019 SEMBA Women in Tech Conference and was invited by Georgia Bio\'s CEO to lead their Strategic Planning sessions in 2019-2020.  She is published in the Electronic Health Reporter, Healthcare Technology Views & News, Becker\'s Health IT Jobs and the ADVANCE Health System Management Journal.  \n Jennifer has served on the numerous nonprofit boards such as:  American Heart Association, Go Red Luncheon, and Executive Leadership Committee.  She also served on the JDRF Board of Directors and was the Fundraising Committee Chairperson. Jennifer served on the Lung Force for Women Board of Directors, and held the position of Vice President of the Board of Directors for the Domestic Violence Network for the Indiana Chapter.  \n She is an accomplished competitive figure skater where she trained for the 1980 Winter Olympics. Jennifer spent most of her young adult life training at The Broadmoor, Figure Skating\'s US Olympic Training Center, located in Colorado Springs, CO.  Her dream was to go back to the Olympic Training Center to work with Olympic athletes. She began her career in Sports Medicine at Indiana University Health Methodist Sports Medicine where she worked closely with the Indiana Pacers, Indianapolis Colts, Purdue University, Indiana University and the largest high school sports teams in Indianapolis.   \n She is a graduate of Indiana University, Bloomington, Indiana.  She holds a Bachelor of Science Degree in Exercise Physiology & Sports Medicine.  She enjoys golf, tennis, running, cycling and traveling the world. Jennifer is a wife and mother of three beautiful girls and step mom to three amazing grown adults. ',
          true
        )} 

        {DisplaySpeakerCard(
          'jennifer_taylor',
          'Jennifer Taylor',
          'Jennifer is a member of FORVIS\' National Advisory Services specializing in IT Risk & Compliance. She leverages more than 19 years of experience in financial institution management. Before joining FORVIS, Jennifer was most recently a community bank president following her time as chief information officer and a bank examiner. \n At FORVIS, she primarily focuses on performing IT general control assessments, cybersecurity risk assessments, and other cybersecurity-related consulting services to help clients identify and reduce security risks to their most critical data and systems. Such services include offering virtual CIO and CISO roles. She performs testing in accordance with several guidelines, frameworks, and regulations including the NIST Cybersecurity Framework, the Gramm-Leach-Bliley Act, and FFIEC IT Examination Booklets. \n Jennifer is a graduate of Murray State University, Kentucky, with a B.S. degree in business administration and an M.B.A. degree. In addition, she is a graduate of the FDIC Corporate University Financial Examiner School and a graduate of Wisconsin University\'s Graduate School of Banking, with a Certificate of Executive Leadership. ',
          true
        )} 

        {DisplaySpeakerCard(
          'monica_wardlow',
          'Monica Wardlow',
          'Monica has been in the Financial Industry for over 20 years in some capacity.  She is currently the Financial Center Manager for GERMAN AMERICAN BANK\'S Campbell Lane West location.  She is very active in the community.  She currently serves on the board of Directors for The Bowling Green Area Chamber of Commerce and is a Chamber Ambassador.   She also serves on the board for Junior Achievement of South Central Kentucky and enjoys being a classroom volunteer.  She has received several awards over her career that includes being  the 2020 Athena Recipient. \n Monica lives in Smiths Grove with her husband Mark and sons Brayden and Myles Wardlow. Monica believes that giving is the key to receiving.',
          true
        )} 

      </div>

    </div>
  )
}

export default Keynote

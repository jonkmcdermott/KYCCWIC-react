import React from 'react'
import './Career.css'
import placeholder from './assets/placeholder.jpg'

function DisplayCareerBadge(career_name, career_url, career_image_exists, career_logo_image) {
// function DisplayCareerBadge(career_name, career_url) {
    return (
        <div className="career-logo-container">
            <div className="career-badge">
                {career_image_exists ?
                    <a href={career_url} target='_blank' rel="noreferrer"><img className='company-logo' src={require("" + career_logo_image + "")} alt={career_name} /></a>
                    :
                    <a href={career_url} target='_blank' rel="noreferrer"><img className='company-logo' src={placeholder} alt={career_name} /></a>
                }

                {/* <a href={career_url} target='_blank' rel="noreferrer"><img className='company-logo' src={require({career_logo})} alt={career_name} /></a> */}
                {/* <a href={career_url} target='_blank' rel="noreferrer"><img className='company-logo' src={require(career_logo + ".png")} alt={career_name} /></a> */}
            </div>
        </div>
        
    );
}

function Career() {
  return (
    <div className='career-section' id='careerfair'>
        <div className="container">
            <h1 className='section-heading career-heading'>Career Fair Participants</h1>

            <div className="career-content">
                {/* Individual Career Participants go here and formating is handled by CSS */}

                {DisplayCareerBadge(
                    'Dollar General',
                    'https://careers.dollargeneral.com/',
                    true,
                    './assets/CareerFair/dollargeneral.png'
                )}


            </div>
        </div>
    </div>
  )
}

export default Career

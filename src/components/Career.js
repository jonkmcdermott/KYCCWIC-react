import React from 'react'
import './Career.css'

function Career() {
  return (
    <div className='career-section' id='careerfair'>
        <div className="container">
            <h1 className='section-heading career-heading'>Career Fair Participants</h1>

            <div className="career-content">
                {/* Individual Career Participants go here and formating is handled by CSS */}

                <div className="career-logo-container">
                    <div className="career-badge">
                        <a href="https://www.dollargeneral.com/" target='_blank' rel="noreferrer"><img className='company-logo' src={require("./assets/CareerFair/dollargeneral.png")} alt="Dollar General" /></a>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Career

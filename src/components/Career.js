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
                    'BGMU',
                    'https://www.bgmu.com/',
                    true,
                    './assets/CareerFair/bgmu.png'
                )}

                {DisplayCareerBadge(
                    'Cengage',
                    'https://www.cengage.com/',
                    true,
                    './assets/Sponsors/Cengage.png'
                )}

                {DisplayCareerBadge(
                    'Coretech',
                    'https://www.coretechllc.com/',
                    true,
                    './assets/Sponsors/Coretech.png'
                )}

                {DisplayCareerBadge(
                    'Dollar General',
                    'https://careers.dollargeneral.com/',
                    true,
                    './assets/CareerFair/dollargeneral.png'
                )}

                {DisplayCareerBadge(
                    'FORVIS',
                    'https://www.forvis.com',
                    true,
                    './assets/Sponsors/Forvis.png'
                )}

                {DisplayCareerBadge(
                    'Franklin Banking & Trust',
                    'https://www.fbtco.com/',
                    true,
                    './assets/CareerFair/franklin.png'
                )}                

                {DisplayCareerBadge(
                    'German American Bank',
                    'https://germanamerican.com/personal/',
                    true,
                    './assets/Sponsors/GermanAmerican.jpg'
                )}

                {DisplayCareerBadge(
                    'Graves Gilbert',
                    'https://www.gravesgilbert.com/',
                    true,
                    './assets/CareerFair/gravesgilbert.jpg'
                )}  

                {DisplayCareerBadge(
                    'Houchens Industries',
                    'https://houchens.com/',
                    true,
                    './assets/CareerFair/houchens.png'
                )}  

                {DisplayCareerBadge(
                    'IT365',
                    'https://www.langcompany.com/managed-it-services/',
                    true,
                    './assets/CareerFair/it365.png'
                )}  

                {DisplayCareerBadge(
                    'Lang Company',
                    'https://www.langcompany.com/',
                    true,
                    './assets/Sponsors/Lang.png'
                )}

                {DisplayCareerBadge(
                    'McGraw Hill',
                    'https://www.mheducation.com',
                    true,
                    './assets/Sponsors/MH.jpg'
                )}

                {DisplayCareerBadge(
                    'Medical Center Health',
                    'https://medcenterhealth.org/',
                    true,
                    './assets/CareerFair/medcenter.jpg'
                )} 

                {DisplayCareerBadge(
                    'RehabBoost',
                    'https://rehabboost.com/',
                    true,
                    './assets/Sponsors/RehabBoost.png'
                )}

                {DisplayCareerBadge(
                    'Service One Credit Union',
                    'https://www.socu.com',
                    true,
                    './assets/Sponsors/SOCU.png'
                )}   

                {DisplayCareerBadge(
                    'Southcentral Kentucky Community & Technical College',
                    'https://southcentral.kctcs.edu/',
                    true,
                    './assets/Sponsors/SKYCTC.png'
                )}

                {DisplayCareerBadge(
                    'Sumitomo Electronics Wiring',
                    'https://sewsus.com/careers/',
                    true,
                    './assets/CareerFair/sumitomo.png'
                )} 

                {DisplayCareerBadge(
                    'Western Kentucky University Gordon Ford College of Business',
                    'https://www.wku.edu/business',
                    true,
                    './assets/Sponsors/WKU.png'
                )}               



            </div>
        </div>
    </div>
  )
}

export default Career

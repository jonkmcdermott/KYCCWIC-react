import React from 'react'
import './Sponsors.css'
import SponsorsData from './data/Sponsors.json'

function DisplaySponsors() {
  const SponsorBadges = SponsorsData.map((sponsor) =>
    <div className="sponsors-logo-container" key={sponsor.id}>
      <div className={"badge "+sponsor.sponsor_class}>
        <a href={sponsor.website} target='_blank' rel="noreferrer"><img className='company-logo' src={require(""+sponsor.logo+"")} alt="" /></a>
      </div>
      <p className="sponsor-level">{sponsor.sponsor_level} Sponsor</p> 
    </div>

  );

  return (
    <div className="sponsors-content">{SponsorBadges}</div>
  );
}


function Sponsors() {
  return (
    <div id='sponsors'>
      <div className="parallax-image-container">
        <div className="container">
          <h1 className="section-heading sponsors-heading">2023 Business Sponsors</h1>
          <div className="sponsors-text">
            <p className="text-block">
              The 2023 Women in Computing Celebration is made possible through generous 
              donations given by the following businesses. We thank them for their 
              wholehearted support.
            </p>
          </div>  
        </div>
      </div>

      {DisplaySponsors()}

      {/* <div className="sponsors-content">

        <div className="sponsors-logo-container">
          <div className="badge badge-black">
            <a href="https://www.w3schools.com" target='_blank' rel="noreferrer"><img className='company-logo' src={require('./assets/Sponsors/WKU.jpg')} alt="" /></a>
          </div>
          <p className="sponsor-level">Keynote Sponsor</p> 
        </div>

        <div className="sponsors-logo-container">
          <img src={sponsorImage} alt="" />
          <p>number two</p>
        </div>

      </div> */}

    </div>
  )
}

export default Sponsors

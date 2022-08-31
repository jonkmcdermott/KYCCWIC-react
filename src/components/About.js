import React from 'react'
import './About.css'

function About() {
  return (
    <div className='container' id='about'>
        <h1 className='section-heading'>About Us</h1>
        <p className="text-block">
          Kentucky Community College Women in Computing (KYCCWIC) is a regional ACM-W Celebration of Women in Computing.  KYCCWIC 
          connects technical women who are working/studying in Kentucky.  The annual conference provides women the opportunity to 
          learn from industry leaders while preparing them for a future career in various technical fields.  The 2023 conference 
          will focus on computer security, computer programming, data analytics, technology trends, and employment. 
        </p>

        <h3 className="subsection-heading">This Year's Theme: <em className='accent-color'>Celebrate, Inform, Support</em></h3>
        <p className='text-block'>
          Through the pandemic, it's been more important than ever to celebrate, inform and support women in the field of computing. 
          Women in computing continue to face both growth and challenges.  We all know that women are powerhouses in the workplace.  
          However, data reminds us that a gender gap still exists as women continue to face decreased wages, discrimination, and 
          harassment.  For these reasons, it's paramount that we continue to celebrate and advocate all women.  Throughout the 
          KYCCWIC Conference, you'll be given the opportunity to hear from leaders in various technical fields, build relationships, 
          and learn.  We're thankful you're here! 
        </p>

        <h3 className="subsection-heading">KYCCWIC's History</h3>
        <p className="text-block">
          The Grace Hopper Celebration (GHC) of Women in Computing was founded in 1994, and is designed to bring the research and 
          career interest of women in computing to the forefront. It is produced annually by the Anita Borg Institute and presented 
          in partnership with the <a className='external-link'href="https://www.acm.org/"> Association of Computing Machinery </a> 
          (ACM).  It is the world's largest technical conference for women in computing (over 22,000 attendees at the Sep 2019 GHC).
        </p>

        <p className='text-block'>
          Smaller regional GHC events are held annually to support women within a local geographic area.  The KY Community Colleges - 
          Women in Computing (KYCC-WiC) Regional Celebration is the first GHC designed 
          <strong className='accent-color'> explicitly for women in community colleges</strong>.
        </p>
        <p className='text-block'>
          The first event was held in 2013. Even years are sponsored by NKU, and are focused on 4 year university faculty and students.
        </p>

        <div className="event-history-block">
          <div>
            <ul className='history-list'>
              <li className="history-list-item"><em className="accent-color">2013 </em> Bluegrass Community & Technical College</li>
              <li className="history-list-item"><em className="accent-color">2015 </em> Bluegrass Community & Technical College</li>
              <li className="history-list-item"><em className="accent-color">2017 </em> Bluegrass Community & Technical College</li>
              <li className="history-list-item"><em className="accent-color">2019 </em> Owensboro Community & Technical College</li>
              <li className="history-list-item"><em className="accent-color">2021 </em> Southcentral Kentucky Community & Technical College</li>
              <li className="history-list-item"><em className="accent-color">2023 </em> Southcentral Kentucky Community & Technical College</li>
          </ul>

          </div>
          
        </div>

    </div>
  )
}

export default About

import React from 'react'
import './Agenda.css'
import ThursdayEventsData from './data/ThursdayEvents.json'
import FridayEventsData from './data/FridayEvents.json'
import AgendaPdf from './assets/WIC2023Program.pdf'

function DisplayAgendaItems(EventDayData) {
    const AgendaItems = EventDayData.map((item) =>
        <div className="agenda-event" key={item.id}>
            <div className="event-time">
                <p>{item.event_time}</p>
            </div>

            <div className="event-details">
                <p className="event-title">{item.event_title}</p>
            </div>
        </div>
    );

    return (
        <div>{AgendaItems}</div>
    );
}

function Agenda() {
  return (
    <div className='agenda-container' id='agenda'> 

        
      <div className="container">
        <h1 className='section-heading'>Agenda</h1>

        <div className="agenda-pdf-section agenda-day">
          <h5>View As PDF:</h5>
          <p><a class='external-link' href={AgendaPdf} target='_blank' rel="noreferrer">Click here to view or download the comprehensive agenda as a PDF</a></p>
        </div>


        <div className="agenda-day">
            <h3 className="agenda-title">THURSDAY</h3>
            <h4 className="agenda-date-time">March 16, 2023 (CST)</h4>
            <p className="event-location"><strong>LOCATION: </strong><a href="https://www.corvettemuseum.org/" className="external-link" target='_blank' rel="noreferrer">National Corvette Museum, Bowling Green, KY</a></p>

            {DisplayAgendaItems(ThursdayEventsData)}

        </div>

        <div className="agenda-day">
            <h3 className="agenda-title">FRIDAY</h3>
            <h4 className="agenda-date-time">March 17, 2023 (CST)</h4>
            <p className="event-location"><strong>LOCATION: </strong><a href="https://southcentral.kctcs.edu/about/campuses/index.aspx" className="external-link" target='_blank' rel="noreferrer">Southcentral Kentucky Community & Technical College, KATI Campus, Bowling Green, KY</a></p>

            {DisplayAgendaItems(FridayEventsData)}

        </div>

      </div>
    </div>
  )
}

export default Agenda

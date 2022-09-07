import React from 'react'
import './Agenda.css'
import ThursdayEventsData from './data/ThursdayEvents.json'
import FridayEventsData from './data/FridayEvents.json'

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



        {/* <h1>BELOW IS HARD CODED</h1> */}



        {/* <div className="agenda-day">
            <h3 className="agenda-title">THURSDAY</h3>
            <h4 className="agenda-date-time">March 16, 2023 (CST)</h4>
            <p className="event-location"><strong>LOCATION: </strong><a href="/" className="external-link">National Corvette Museum, Bowling Green, KY</a></p>


            <div className="agenda-event">
                <div className="event-time">
                    <p>2:00 - 3:00 PM</p>
                </div>

                <div className="event-details">
                    <p className="event-title">Registration at National Corvette Museum</p>
                </div>
            </div>


            <div className="agenda-event">
                <div className="event-time">
                    <p>3:00 - 5:00 PM</p>
                </div>

                <div className="event-details">
                    <p className="event-title">Welcome, Keynote, Celebrations</p>
                </div>
            </div>


            <div className="agenda-event">
                <div className="event-time">
                    <p>5:00 - 6:00 PM</p>
                </div>

                <div className="event-details">
                    <p className="event-title">Group Tour of Corvette Museum</p>
                </div> 
            </div>


            <div className="agenda-event">
                <div className="event-time">
                    <p>6:00 - 8:00 PM</p>
                </div>

                <div className="event-details">
                    <p className="event-title">Dinner, Keynote, Closing Remarks</p>
                </div> 
            </div>


        </div> */}



      </div>
    </div>
  )
}

export default Agenda

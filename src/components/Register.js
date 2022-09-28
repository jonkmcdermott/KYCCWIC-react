import React from 'react'
import './Register.css'

function Register() {
  return (
    <div id='register'>
        <div className="container">
            <h1><a className='external-link' href='https://www.surveymonkey.com/r/THWXYC8' target='_blank' rel="noreferrer">Register for the Celebration with SurveyMonkey!</a></h1>
            <p className="text-block">
                <strong>All genders welcome to attend</strong> <br></br>
                <strong>Registration through <a className='external-link' href='https://www.surveymonkey.com/r/THWXYC8' target='_blank' rel="noreferrer">SurveyMonkey</a> </strong> <br></br>
            </p>

            <h3>Students - $10</h3>
            <p className="text-block">
              <em>(Debit/Credit Card Payment Only) </em> <br></br>
              Students are high school and college enrolled.  This cost includes participation in all keynote presentations, chosen breakout sessions, employment panel, career fair, and all meals.
            </p>

            <h3>Non-Students - $50</h3>
            <p className="text-block">
              <em>(Debit/Credit Card Payment Only) </em> <br></br>
              High school and college faculty and staff. Community professionals.  This cost includes participation in all keynote presentations, chosen breakout sessions, employment panel, career fair, and all meals.
            </p>
        </div>
    </div>
  )
}

export default Register

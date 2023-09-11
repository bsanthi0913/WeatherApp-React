import React from 'react'

export default function WeatherBlocks(props) {
  return (
    <div>
      <h1 className="weather-condition">Rainfall</h1>
        <ul className="cards">
          <li className="card">
            <h2 className="day-name">Tuesday</h2>
            <div className="card-icon">
              <img src="./images/clouds.png" alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">32</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">Wednesday</h2>
            <div className="card-icon">
              <img src="./images/clear1.png" alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">32</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">Thursday</h2>
            <div className="card-icon">
              <img src="./images/clear1.png" alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">32</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">Friday</h2>
            <div className="card-icon">
              <img src="./images/clear1.png" alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">32</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">Saturday</h2>
            <div className="card-icon">
              <img src="./images/clear1.png" alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">32</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">Sunday</h2>
            <div className="card-icon">
              <img src="./images/clear1.png" alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">32</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
        </ul>

        </div>
  )
}

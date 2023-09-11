import React, { useEffect, useState } from 'react'

export default function Highlights(props) {
  const [uv, setUv] = useState("0");
  
    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.uvindex) {
        console.log(props.data);
        setUv(props.data.currentConditions.uvindex);
      }

    }, [props.data]);
    
    
  
  
  return (
    <div className="highlights">
        <h2 className="heading">Today's Highlights</h2>
        <div className="cards">

          <div className="card2">
            <h4 className="card-heading">UV index</h4>
            <div className="content">
              <p className="uv-index">{uv}</p>
              <p className="uv-text">sun protection recommended.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Wind Status</h4>
            <div className="content">
              <p className="wind-speed">20 kmph</p>
              <p className="wind-dir">Wind Direction West to East.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Rainfall</h4>
            <div className="content">
              <p className="rain-fall">20 mm</p>
              <p className="rain-fcast">heavy rain expected.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Humidity</h4>
            <div className="content">
              <p className="humidity-per">80%</p>
              <p className="dew-point">The dew point is 26 right now.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Feels Like</h4>
            <div className="content">
              <p className="feels-temp">40°C</p>
              <p className="feels-text">The humidity is making it feel warmer.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Sunset</h4>
            <div className="content">
              <p className="sunset-time">6:42 PM</p>
              <p className="sunrise-time">Next day sunrise at 5:28 AM.</p>
            </div>
          </div>

        </div>
      </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function Highlights(props) {
  const [uv, setUv] = useState("0");
  const [windSpeed,SetWindSpeed] = useState("20 kmph");
  const [rainfall, SetRainfall] = useState("0 mm");
  const [humidity,SetHumidity] = useState("80%");
  const [feelsLike,SetFellsLike] = useState("40°C");
  const [sunSet,SetSunSet] = useState("6:42 PM");


  function FtoC(temperature){

    const F = temperature;

    const C = (5/9) * (F - 32);

    return Math.ceil(C);

}

function processing(time)

{
    let final="";

    const arr=time.split(":");

    final+=arr[0]-12;

    final+=":"+arr[1];

    return final;

}
  
    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.uvindex) {
        console.log(props.data);
        setUv(props.data.currentConditions.uvindex);
      }

    }, [props.data]);


    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.windspeed) {
        SetWindSpeed(props.data.currentConditions.windspeed +" kmph");
      }

    }, [props.data]);

    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.precip) {
        SetRainfall(props.data.currentConditions.precip+" mm");
      }

    }, [props.data]);

    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.humidity) {
        SetHumidity(props.data.currentConditions.humidity+"%");
      }

    }, [props.data]);

    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.feelslike) {
        
        SetFellsLike(FtoC(props.data.currentConditions.feelslike)+"°C");
      }

    }, [props.data]);

    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.sunset) {
        
        SetSunSet(processing(props.data.currentConditions.sunset)+" PM");
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
              <p className="wind-speed">{windSpeed}</p>
              <p className="wind-dir">Wind Direction West to East.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Rainfall</h4>
            <div className="content">
              <p className="rain-fall">{rainfall}</p>
              <p className="rain-fcast">heavy rain expected.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Humidity</h4>
            <div className="content">
              <p className="humidity-per">{humidity}</p>
              <p className="dew-point">The dew point is 26 right now.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Feels Like</h4>
            <div className="content">
              <p className="feels-temp">{feelsLike}</p>
              <p className="feels-text">The humidity is making it feel warmer.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Sunset</h4>
            <div className="content">
              <p className="sunset-time">{sunSet}</p>
              <p className="sunrise-time">Next day sunrise at 5:28 AM.</p>
            </div>
          </div>

        </div>
      </div>
  )
}

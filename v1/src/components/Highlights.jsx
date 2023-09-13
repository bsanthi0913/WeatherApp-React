import React, { useEffect, useState } from 'react'

export default function Highlights(props) {
  const [uv, setUv] = useState("0");
  const [windSpeed,SetWindSpeed] = useState("20 kmph");
  const [rainfall, SetRainfall] = useState("0 mm");
  const [humidity,SetHumidity] = useState("80%");
  const [feelsLike,SetFellsLike] = useState("40°C");
  const [sunSet,SetSunSet] = useState("6:42 PM");


  const [messageUv, setmessageUv] = useState("Sun protection recomended.");
  const [messageWindSpeed,SetmessageWindSpeed] = useState("Wind Direction West to East.");
  const [messageRainfall, SetmessageRainfall] = useState("heavy rain expected.");
  const [messageHumidity,SetmessageHumidity] = useState("The dew point is 26 right now.");
  const [messageSunSet,SetmessageSunSet] = useState("Next day sunrise at 5:28 AM.");


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

function uv_message(uv)

{

    if(uv>=0 && uv<=2)

       return "Wear sunglasses on bright days.";

    else if(uv>2 && uv<=5)

        return "Stay in shade near midday.";

    else if(uv>5 && uv<=7)

        return "Reduce sun time between 10am to 4pm.";

    else

        return "Try to avoid sun between 10am to 4pm.";

}

function wind_direction(degrees) {

    degrees = degrees % 360;

    if (degrees < 0) {

      degrees += 360;

    }

    const fullDirections = [

      'North', 'North-Northeast', 'Northeast', 'East-Northeast', 'East', 'East-Southeast', 'Southeast', 'South-Southeast',

      'South', 'South-Southwest', 'Southwest', 'West-Southwest', 'West', 'West-Northwest', 'Northwest', 'North-Northwest'

    ];

    const index = Math.round((degrees % 360) / 22.5);

    

    let wind_final="Wind direction "+fullDirections[index];
    return wind_final;

}

function predictRainfall(probability) {

      if (probability < 30) {

        return "Low chance of rainfall";

      } else if (probability < 70) {

        return "Moderate chance of rainfall";

      } else {

        return "High chance of rainfall";

      }

}

function humidity_dew(RH,T)

{
    const Tdp = T - ((100 - RH) / 5);

    let final_humidity="The dew point is "+Math.ceil(Tdp)+" right now";
    return final_humidity;

}

function processing2(time)

{
    let final="";

    const arr=time.split(":");

    final+=arr[0];

    final+=":"+arr[1];
    let res="Next day Sunrise at "+final;

    return res;

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





    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.uvindex) {
        console.log(props.data);
        setmessageUv(uv_message(props.data.currentConditions.uvindex));
      }

    }, [props.data]);


    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.winddir) {
        SetmessageWindSpeed(wind_direction(props.data.currentConditions.winddir));
      }

    }, [props.data]);

    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.precipprob) {
        SetmessageRainfall(predictRainfall(props.data.currentConditions.precipprob));
      }

    }, [props.data]);

    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.humidity && props.data.currentConditions.feelslike) {
        SetmessageHumidity(humidity_dew(props.data.currentConditions.humidity,FtoC(props.data.currentConditions.feelslike)));
      }

    }, [props.data]);


    useEffect(()=>{
      if (props.data && props.data.currentConditions && props.data.currentConditions.sunset) {
        
        SetmessageSunSet(processing2(props.data.days[1].sunrise)+" AM");
      }

    }, [props.data]);

    



    
    
  
  
  return (
    <div className="highlights">
        <h2 className="heading">Today's Highlights</h2>
        <div className="cards">

          <div className="card2">
            <h4 className="card-heading">UV Index</h4>
            <div className="content">
              <p className="uv-index">{uv}</p>
              <p className="uv-text">{messageUv}</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Wind Status</h4>
            <div className="content">
              <p className="wind-speed">{windSpeed}</p>
              <p className="wind-dir">{messageWindSpeed}</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Rainfall</h4>
            <div className="content">
              <p className="rain-fall">{rainfall}</p>
              <p className="rain-fcast">{messageRainfall}</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Humidity</h4>
            <div className="content">
              <p className="humidity-per">{humidity}</p>
              <p className="dew-point">{messageHumidity}</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Feels Like</h4>
            <div className="content">
              <p className="feels-temp">{feelsLike}</p>
              <p className="feels-text">The humidity is making it feel Warmer.</p>
            </div>
          </div>

          <div className="card2">
            <h4 className="card-heading">Sunset</h4>
            <div className="content">
              <p className="sunset-time">{sunSet}</p>
              <p className="sunrise-time">{messageSunSet}</p>
            </div>
          </div>

        </div>
      </div>
  )
}

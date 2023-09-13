import React, { useState, useEffect } from "react";

export default function WeatherBlocks(props) {
  const [time1, setTime1] = useState("Tuesday");
  const [time2, setTime2] = useState("Wednesday");
  const [time3, setTime3] = useState("Thursday");
  const [time4, setTime4] = useState("Friday");
  const [time5, setTime5] = useState("Saturday");
  const [time6, setTime6] = useState("Sunday");
  const [icon1, setIcon1] = useState("./weather-icons/clear-day.svg");
  const [icon2, setIcon2] = useState("./weather-icons/clear-day.svg");
  const [icon3, setIcon3] = useState("./weather-icons/clear-day.svg");
  const [icon4, setIcon4] = useState("./weather-icons/clear-day.svg");
  const [icon5, setIcon5] = useState("./weather-icons/clear-day.svg");
  const [icon6, setIcon6] = useState("./weather-icons/clear-day.svg");
  const [temp1, setTemp1] = useState("32");
  const [temp2, setTemp2] = useState("32");
  const [temp3, setTemp3] = useState("32");
  const [temp4, setTemp4] = useState("32");
  const [temp5, setTemp5] = useState("32");
  const [temp6, setTemp6] = useState("32");

  function FtoC(temperature) {
    const F = temperature;
    const C = (5 / 9) * (F - 32);
    return Math.ceil(C);
  }
  function dayOfWeek(dte) {
    const date = new Date(dte * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  // time
  useEffect(() => {
    if (props.data && props.data.days) {
      setTime1(dayOfWeek(props.data.days[1].datetimeEpoch));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTime2(dayOfWeek(props.data.days[2].datetimeEpoch));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTime3(dayOfWeek(props.data.days[3].datetimeEpoch));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTime4(dayOfWeek(props.data.days[4].datetimeEpoch));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTime5(dayOfWeek(props.data.days[5].datetimeEpoch));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTime6(dayOfWeek(props.data.days[6].datetimeEpoch));
    }
  }, [props.data]);

  // weather icon
  useEffect(() => {
    if (props.data && props.data.days) {
      setIcon1(`./weather-icons/${props.data.days[1].icon}.svg`);
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setIcon2(`./weather-icons/${props.data.days[2].icon}.svg`);
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setIcon3(`./weather-icons/${props.data.days[3].icon}.svg`);
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setIcon4(`./weather-icons/${props.data.days[4].icon}.svg`);
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setIcon5(`./weather-icons/${props.data.days[5].icon}.svg`);
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setIcon6(`./weather-icons/${props.data.days[6].icon}.svg`);
    }
  }, [props.data]);

  // temperature
  useEffect(() => {
    if (props.data && props.data.days) {
      setTemp1(FtoC(props.data.days[1].temp));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTemp2(FtoC(props.data.days[2].temp));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTemp3(FtoC(props.data.days[3].temp));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTemp4(FtoC(props.data.days[4].temp));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTemp5(FtoC(props.data.days[5].temp));
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      setTemp6(FtoC(props.data.days[6].temp));
    }
  }, [props.data]);
  return (
    <div className="main">
      {/* <h1 className="weather-condition">Rainfall</h1> */}
      <nav>
        <ul className="options">
          <button className="hourly">Today</button>
          <button className="weekly">This Week</button>
        </ul>
      </nav>
      <ul className="cards">
        <li className="card">
          <h2 className="day-name">{time1}</h2>
          <div className="card-icon">
            <img src={icon1} alt="no-image" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{temp1}</h2>
            <span className="temp-unit"> °C</span>
          </div>
        </li>
        <li className="card">
          <h2 className="day-name">{time2}</h2>
          <div className="card-icon">
            <img src={icon2} alt="no-image" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{temp2}</h2>
            <span className="temp-unit"> °C</span>
          </div>
        </li>
        <li className="card">
          <h2 className="day-name">{time3}</h2>
          <div className="card-icon">
            <img src={icon3} alt="no-image" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{temp3}</h2>
            <span className="temp-unit"> °C</span>
          </div>
        </li>
        <li className="card">
          <h2 className="day-name">{time4}</h2>
          <div className="card-icon">
            <img src={icon4} alt="no-image" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{temp4}</h2>
            <span className="temp-unit"> °C</span>
          </div>
        </li>
        <li className="card">
          <h2 className="day-name">{time5}</h2>
          <div className="card-icon">
            <img src={icon5} alt="no-image" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{temp5}</h2>
            <span className="temp-unit"> °C</span>
          </div>
        </li>
        <li className="card">
          <h2 className="day-name">{time6}</h2>
          <div className="card-icon">
            <img src={icon6} alt="no-image" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{temp6}</h2>
            <span className="temp-unit"> °C</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

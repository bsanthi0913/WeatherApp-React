import React, { useState, useEffect } from "react";

export default function WeatherBlocks(props) {
  const [toggle, setToggle] = useState(true);
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
  // hourly
  const [htime1, hsetTime1] = useState("6:00 AM");
  const [htime2, hsetTime2] = useState("7:00 AM");
  const [htime3, hsetTime3] = useState("8:00 AM");
  const [htime4, hsetTime4] = useState("9:00 AM");
  const [htime5, hsetTime5] = useState("10:00 AM");
  const [htime6, hsetTime6] = useState("11:00 AM");
  const [hicon1, hsetIcon1] = useState("./weather-icons/clear-day.svg");
  const [hicon2, hsetIcon2] = useState("./weather-icons/clear-day.svg");
  const [hicon3, hsetIcon3] = useState("./weather-icons/clear-day.svg");
  const [hicon4, hsetIcon4] = useState("./weather-icons/clear-day.svg");
  const [hicon5, hsetIcon5] = useState("./weather-icons/clear-day.svg");
  const [hicon6, hsetIcon6] = useState("./weather-icons/clear-day.svg");
  const [htemp1, hsetTemp1] = useState("32");
  const [htemp2, hsetTemp2] = useState("32");
  const [htemp3, hsetTemp3] = useState("32");
  const [htemp4, hsetTemp4] = useState("32");
  const [htemp5, hsetTemp5] = useState("32");
  const [htemp6, hsetTemp6] = useState("32");

  const handleClick = () => {
    setToggle(!toggle);
  };
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
  function getHours(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    return hours;
  }
  function getHours1(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    // alert(typeof hours);
    return hours + 1;
  }
  function getHours2(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    // alert(typeof hours);
    return hours + 2;
  }
  function getHours3(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    // alert(typeof hours);
    return hours + 3;
  }
  function getHours4(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    // alert(typeof hours);
    return hours + 4;
  }
  function getHours5(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    // alert(typeof hours);
    return hours + 5;
  }
  function getHours6(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    hours = Number(hours);
    // alert(typeof hours);
    return hours + 6;
  }
  function getDayTime(datetimeEpoch, datetime) {
    const date = new Date(datetimeEpoch * 1000);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    // Get the time in 12-hour format (e.g., 02:30 PM)
    const timeString = datetime; // Replace with your time string
    // Split the time string into hours and minutes
    let [hours, minutes] = timeString.split(":").map(String);
    if (minutes.length == 1) {
      minutes = "0" + minutes;
    }
    Number(hours);
    // Determine whether it's AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";
    const pmam = hours >= 12 ? "AM" : "PM";
    // Convert to 12-hour format
    const hours12 = hours % 12 || 12;

    // Create the formatted time string

    const formattedTime = `${hours12}:${minutes} ${ampm}`;
    if (hours12 === 11) {
      return `${hours12 + 1} ${pmam}`;
    }
    if (hours12 == 12) {
      return `${hours12 - 11} ${ampm}`;
    }
    return `${hours12 + 1} ${ampm}`;
  }
  function getDayTime1(datetimeEpoch, datetime) {
    const t = getDayTime(datetimeEpoch, datetime);

    const hours12 = Number(t.slice(-5, -3));
    const ampm = t.slice(-2);
    if (hours12 === 11 && ampm === "AM") {
      return `${hours12 + 1} PM`;
    }
    if (hours12 === 11 && ampm === "PM") {
      return `${hours12 + 1} AM`;
    }
    if (hours12 === 12) {
      return `${hours12 - 11} ${ampm}`;
    }
    // alert(ampm);
    return `${hours12 + 1} ${ampm}`;
  }
  function getDayTime2(datetimeEpoch, datetime) {
    const t = getDayTime1(datetimeEpoch, datetime);
    const hours12 = Number(t.slice(-5, -3));

    const ampm = t.slice(-2);
    if (hours12 === 11 && ampm === "AM") {
      return `${hours12 + 1} PM`;
    }
    if (hours12 === 11 && ampm === "PM") {
      return `${hours12 + 1} AM`;
    }
    if (hours12 === 12) {
      return `${hours12 - 11} ${ampm}`;
    }

    return `${hours12 + 1} ${ampm}`;
  }
  function getDayTime3(datetimeEpoch, datetime) {
    const t = getDayTime2(datetimeEpoch, datetime);
    const hours12 = Number(t.slice(-5, -3));
    const ampm = t.slice(-2);
    if (hours12 === 11 && ampm === "AM") {
      return `${hours12 + 1} PM`;
    }
    if (hours12 === 11 && ampm === "PM") {
      return `${hours12 + 1} AM`;
    }
    if (hours12 === 12) {
      return `${hours12 - 11} ${ampm}`;
    }
    return `${hours12 + 1} ${ampm}`;
  }
  function getDayTime4(datetimeEpoch, datetime) {
    const t = getDayTime3(datetimeEpoch, datetime);
    const hours12 = Number(t.slice(-5, -3));
    const ampm = t.slice(-2);
    if (hours12 === 11 && ampm === "AM") {
      return `${hours12 + 1} PM`;
    }
    if (hours12 === 11 && ampm === "PM") {
      return `${hours12 + 1} AM`;
    }
    if (hours12 === 12) {
      return `${hours12 - 11} ${ampm}`;
    }
    return `${hours12 + 1} ${ampm}`;
  }
  function getDayTime5(datetimeEpoch, datetime) {
    const t = getDayTime4(datetimeEpoch, datetime);
    const hours12 = Number(t.slice(-5, -3));
    const ampm = t.slice(-2);
    if (hours12 === 11 && ampm === "AM") {
      return `${hours12 + 1} PM`;
    }
    if (hours12 === 11 && ampm === "PM") {
      return `${hours12 + 1} AM`;
    }
    if (hours12 === 12) {
      return `${hours12 - 11} ${ampm}`;
    }
    return `${hours12 + 1} ${ampm}`;
  }

  // daily
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
  // hourly

  //time
  useEffect(() => {
    if (props.data && props.data.days) {
      hsetTime1(
        getDayTime(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        )
      );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      hsetTime2(
        getDayTime1(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        )
      );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      hsetTime3(
        getDayTime2(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        )
      );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      hsetTime4(
        getDayTime3(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        )
      );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      hsetTime5(
        getDayTime4(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        )
      );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      hsetTime6(
        getDayTime5(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        )
      );
    }
  }, [props.data]);

  // temp

  useEffect(() => {
    if (props.data && props.data.days) {
      if (
        getHours(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        ) === 23
      )
        hsetTemp1(FtoC(props.data.days[1].hours[0].temp));
      else
        hsetTemp1(
          FtoC(
            props.data.days[0].hours[
              getHours1(
                props.data.currentConditions.datetimeEpoch,
                props.data.currentConditions.datetime
              )
            ].temp
          )
        );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      if (
        getHours(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        ) === 22
      )
        hsetTemp2(FtoC(props.data.days[1].hours[0].temp));
      else
        hsetTemp2(
          FtoC(
            props.data.days[0].hours[
              getHours2(
                props.data.currentConditions.datetimeEpoch,
                props.data.currentConditions.datetime
              )
            ].temp
          )
        );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      if (
        getHours(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        ) === 21
      )
        hsetTemp3(FtoC(props.data.days[1].hours[0].temp));
      else
        hsetTemp3(
          FtoC(
            props.data.days[0].hours[
              getHours3(
                props.data.currentConditions.datetimeEpoch,
                props.data.currentConditions.datetime
              )
            ].temp
          )
        );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      if (
        getHours(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        ) === 20
      )
        hsetTemp4(FtoC(props.data.days[1].hours[0].temp));
      else
        hsetTemp4(
          FtoC(
            props.data.days[0].hours[
              getHours4(
                props.data.currentConditions.datetimeEpoch,
                props.data.currentConditions.datetime
              )
            ].temp
          )
        );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      if (
        getHours(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        ) === 19
      )
        hsetTemp5(FtoC(props.data.days[1].hours[0].temp));
      else
        hsetTemp5(
          FtoC(
            props.data.days[0].hours[
              getHours5(
                props.data.currentConditions.datetimeEpoch,
                props.data.currentConditions.datetime
              )
            ].temp
          )
        );
    }
  }, [props.data]);
  useEffect(() => {
    if (props.data && props.data.days) {
      if (
        getHours(
          props.data.currentConditions.datetimeEpoch,
          props.data.currentConditions.datetime
        ) === 18
      )
        hsetTemp6(FtoC(props.data.days[1].hours[0].temp));
      else
        hsetTemp6(
          FtoC(
            props.data.days[0].hours[
              getHours6(
                props.data.currentConditions.datetimeEpoch,
                props.data.currentConditions.datetime
              )
            ].temp
          )
        );
    }
  }, [props.data]);
  if (toggle) {
    return (
      <div className="main">
        <button onClick={handleClick} class="btn btn-dark mb-5">
          Toggle State
        </button>
        {/* <h1 className="weather-condition">Rainfall</h1> */}
        {/* <nav>
          <ul className="options">
            <button className="hourly">Today</button>
            <button className="weekly">This Week</button>
          </ul>
        </nav> */}
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
  } else {
    return (
      <div className="main">
        <button onClick={handleClick} class="btn btn-dark mb-5">
          Toggle State
        </button>
        <ul className="cards">
          <li className="card">
            <h2 className="day-name">{htime1}</h2>
            <div className="card-icon">
              <img src={icon1} alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">{htemp1}</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">{htime2}</h2>
            <div className="card-icon">
              <img src={icon2} alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">{htemp2}</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">{htime3}</h2>
            <div className="card-icon">
              <img src={icon3} alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">{htemp3}</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">{htime4}</h2>
            <div className="card-icon">
              <img src={icon4} alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">{htemp4}</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">{htime5}</h2>
            <div className="card-icon">
              <img src={icon5} alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">{htemp5}</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
          <li className="card">
            <h2 className="day-name">{htime6}</h2>
            <div className="card-icon">
              <img src={icon6} alt="no-image" />
            </div>
            <div className="day-temp">
              <h2 className="temp">{htemp6}</h2>
              <span className="temp-unit"> °C</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

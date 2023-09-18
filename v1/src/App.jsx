import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./components/Sidenav";
import SideBar from "./components/SideBar";
import WeatherBlocks from "./components/WeatherBlocks";
import Highlights from "./components/Highlights";
import Login from "./components/Login";
import GetWeatherInfo from "./services/GetWeatherInfo.jsx";
import Signup from "./components/Signup";

function App() {
  const [counter, setCounter] = useState(0);
  function something() {
    setCounter(() => counter + 1);
  }

  
  // const [click, setClick] = useState(false);
  
  
  
  const [username, setUsername] = useState("");

  function Page() {
    
    const [data, setData] = useState({});
    //let bg="./images/rain_green.avif";
    const [bg,Setbg] = useState("./images/rain_green.avif");
    function update_background(icons)
    {
        console.log(icons);
        if(icons=="hail" || icons=="rain" || icons=="showers-day" || icons=="showers-night" || icons=="rain-snow-showers-day" || icons=="rain-snow-showers-night" || icons=="thunder-rain"|| icons=="thunder-showers-day" || icons=="thunder-showers-night" || icons=="thunder")
            Setbg("./images/back-rain.jpeg");
        else if(icons=="clear-day" || icons=="clear-night" )
            Setbg("./images/back-sunny.jpeg");
        else if(icons=="fog" || icons=="rain-snow" || icons=="sleet" || icons=="snow-showers-day" || icons=="snow-showers-night" || icons=="snow")
            Setbg("./images/back-snow.avif");
        else if(icons=="cloudy" || icons=="partly-cloudy-day"|| icons=="partly-cloudy-night" || icons=="wind")
            Setbg("./images/back-cloud.jpeg");
        else
            Setbg("./images/rain_green.avif");
    }
    useEffect(() => {
      if (data && data.currentConditions) {
        console.log(data);
        update_background(data.currentConditions.icon);
      }
    }, [data]);
    return (
      <div id="display-page" className="wrapper" style={{backgroundImage:`url(${bg})`,backgroundRepeat: "no-repeat",height:"150vh",width:"100vw"}}>
          <SideBar data={data} setData={setData} />
          <div className="main">
            <Sidenav username={username} setUsername={setUsername} />
            <WeatherBlocks data={data} setData={setData} />
            <Highlights data={data} setData={setData} />
  
            {/* <button onClick={console.log(counter.longitude)}></button> */}
          </div>
      </div>
      
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login username={username} setUsername={setUsername} />} />
        <Route path="/home" element={<Page/> } />
        <Route path="/register" element= {<Signup/>} />
      </Routes>  
    </Router>

   
  );
}

export default App;

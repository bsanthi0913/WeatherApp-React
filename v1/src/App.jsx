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

  const [data, setData] = useState({});
  // const [click, setClick] = useState(false);
  const bg="./images/back-sunny.jpeg";
  function Page() {
    return (
      <div>
      <div id="display-page" className="wrapper" style={{backgroundImage:`url(${bg})`,backgroundRepeat: "no-repeat",height:"120vh",width:"100vw"}}>
          <SideBar data={data} setData={setData} />
          <div className="main">
            <Sidenav />
            <WeatherBlocks data={data} setData={setData} />
            <Highlights data={data} setData={setData} />
  
            {/* <button onClick={console.log(counter.longitude)}></button> */}
          </div>
      </div>
      </div>
      
    )
  }

  return (
    <Router>
      <Routes>


        <Route path="/" element={<Login />} />
        <Route path="/home" element={Page() } />
        <Route path="/register" element= {<Signup/>} />
      </Routes>  
    </Router>

   
  );
}

export default App;

import { useState, useEffect} from "react"
import "./App.css"
import SideBar from "./components/SideBar"
import WeatherBlocks from "./components/WeatherBlocks"
import Highlights from "./components/Highlights"
import  GetWeatherInfo  from "./services/GetWeatherInfo.jsx"

function App() {
  
  const [counter, setCounter] = useState(0);
  function something (){
    setCounter(()=> counter + 1);
  }
  // useEffect(() => {
  //   GetWeatherInfo().then ( info => {
  //     setCounter(info)
  //   })
  // },[]);

  const [data, setData] = useState({});
  const [click, setClick] = useState(false);



  
  return (
    <div id="display-page" className="wrapper">
      <SideBar data={data} setData={setData} />
      <div className="main">
        <WeatherBlocks data={data} setData={setData} />
        <Highlights data={data} setData={setData} />
        
       {/* <button onClick={console.log(counter.longitude)}></button> */}
      </div>
    </div>
    
  )
}

export default App
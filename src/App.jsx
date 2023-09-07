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


  
  return (
    <div id="display-page" className="wrapper">
      <SideBar/>
      <div className="main">
        <WeatherBlocks/>
        <Highlights/>
        
       {/* <button onClick={console.log(counter.longitude)}></button> */}
      </div>
    </div>
    
  )
}

export default App

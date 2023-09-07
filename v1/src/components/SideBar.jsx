import React, { useState } from 'react'
import axios from "axios";

export default function SideBar() {
    const [suggestionList, setList] = useState([]);
    const [value, setInput] = useState("");

    function debounce(func, delay) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const handleOnChange = (e) => {
        //console.log(e.target.value);
        //console.log("input is " + e.target.value);
        setInput(e.target.value);
        debounce(searchLocations(e.target.value), 300);
    };

    function searchLocations(inputValue){
        
        //console.log("in funv"+inputValue);

        let filter_input="";
        //console.log(inputValue.length);
        for(let i=0;i<inputValue.length;i++)
        {
            if(inputValue[i]===',' || inputValue===' ')
            break;
            else
            filter_input+=inputValue[i];
        }
        inputValue = filter_input;

        //console.log("updated data="+inputValue);
        //----------------------------------------



        const url = `http://api.geonames.org/searchJSON?q=${inputValue}&name_startsWith=${inputValue}&cities=cities1000&fuzzy=0.8&maxRows=5&username=santhi0913`;
        axios.get(url).then(response => {
            let data = response.data;
           
            setList(data.geonames);
           
        })
        setList([]);
        
    };
suggestionList.map(location => {
    console.log("list "+location.name);
})

function handleonClick(e){
    setList([]);
    setInput(e.target.innerText);
}
function SuggestionDropdown() {
    return(
        <ul className="dropdown-container">
            {suggestionList.map((sug) => {
                return(
                    <li key={sug.id} className='li-bar' onClick={handleonClick}>
                        {sug.name + " ," + sug.countryName}
                    </li>
                )
            })}
        </ul>

        

    );

}


  return (
    <div className="wrapper-bar">

    
      <div className="sidebar">
          
          <div className="searchbar ">
              <form>
                  <button id="searchButton" type="submit">Submit</button>
                  <input value={value} id="searchBox" type="text" placeholder="Search City" onChange={handleOnChange}/>
                  
              </form>
              
        
          </div>
         
          {/* <ul className="dropdown-container" id="suggestions"></ul> */}
          <SuggestionDropdown suggestionList = {suggestionList}/>
         

          
          <div  className="cloud">
              <img id="icon" className="img-bar" src="./images/rain-smiley.png"/>
          </div>
          
         
          <div className="location">
              
              <i className="fa-solid fa-location-dot"></i>
              <div id="loc">Bangalore, India</div>
              
          </div>

         
          <div id="temperature" className="temp-bar">
              22&deg;C
          </div>

          
          <div id="day-sidebar" className="day">
              Monday, 10:00 AM
          </div>

          <hr/>

          <div className="heading">
              The Next Day Forecast
          </div>

          
          <div className="daily">
              <div className="daytwo">
                 2 Days
              </div>
              <div className="dayseven">
                  7 Days
              </div>
          </div>

          

          <table>
            <tbody>
              <tr>
                  <td className="image-cell"><img id="image1-sidebar" src="./weather-icons/cloudy.svg" alt="Image 1"/></td>
                  <td className="text-cell" id="image1-text">Sun ,Dec 24 </td>

              </tr>
              </tbody>
              </table>

          <table>
          <tbody>
              <tr className="row2">
                  <td className="image-cell" ><img id="image2-sidebar" src="./weather-icons/rain.svg" alt="Image 2"/></td>
                  <td className="text-cell" id="image2-text">Mon ,Dec 25 </td>
              </tr>
              </tbody>
          </table>


      </div>
  </div>
   
  );
}

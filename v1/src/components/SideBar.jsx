import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function SideBar(props) {
    const [suggestionList, setList] = useState([]);
    const [value, setInput] = useState("");
    const [address, setAddress]= useState({name: "London", country: "UK"});
    const [temp, setTemp] = useState("22");
    const [icon, setIcon] = useState("rain");
    const [current_day, setDay] = useState({day:"Monday", time: "10:00 AM"});
    const [day1, setDay1] = useState(({day:"Sun", month: "Dec", date:"24"}));
    const [day2, setDay2] = useState(({day:"Mon", month: "Dec", date:"25"}));
    const [icon1, setIcon1] = useState("rain");
    const [icon2, setIcon2] = useState("rain");

    useEffect(()=>{
        if (props.data && props.data.currentConditions ) {
          console.log(props.data);
          updateSideBar(props.data.currentConditions.temp, address.name, address.country, props.data.currentConditions.icon, props.data.currentConditions.datetimeEpoch, props.data.currentConditions.datetime, props.data.days[1], props.data.days[2]);
        }
  
      }, [props.data]);

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

    // function handleonClick(e, lat, long){
    //     setList([]);
    //     setInput(e.target.innerText);
    //     console.log(lat, long);
    // }
    function SuggestionDropdown() {
        return(
            <ul className="dropdown-container">
                {suggestionList.map((sug) => {
                    return(
                        <li key={sug.id} className='li-bar' onClick={(e) => {
                            props.setClick(true);
                                setList([]);
                                setInput(e.target.innerText);
                                console.log(sug.lat, sug.lng);
                                // props.setData()
                                getWeather(sug.lat, sug.lng, sug.name, sug.countryName);
                                setAddress({name: sug.name, country: sug.countryName});
                                
                                
                        }}>
                            {sug.name + " ," + sug.countryName}
                        </li>
                    )
                })
                }
                {/* {props.setClick(false)} */}
                
            </ul>
        );

    }
    function getWeather(lat, long, name, country){
       
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}/?key=6JUJ3PJZUX8R3QQZYEG7VEG9R `;
        axios.get(url).then ( response => {
            const data = response.data;
            console.log(data);
            props.setData(data);
        })
        
    
    }
    function getDayTimeNew(datetime){

        // Create a Date object from the date string
        const dateString = datetime;
        const dateObject = new Date(dateString);
        // Get the day of the week
    
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
        const dayOfWeek = daysOfWeek[dateObject.getDay()];
        // Get the date
    
        const date = dateObject.getDate();
    
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
        const month = months[dateObject.getMonth()];
        return [dayOfWeek, date, month];
    }
    
    function getDayTime(datetimeEpoch, datetime){
    
            const date = new Date(datetimeEpoch * 1000);
            // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
            // Get the time in 12-hour format (e.g., 02:30 PM)
            const timeString = datetime; // Replace with your time string
            // Split the time string into hours and minutes
            let [hours, minutes] = timeString.split(':').map(String);
            if(minutes.length == 1){
            minutes=  '0'+minutes;
            }
            Number(hours);
            // Determine whether it's AM or PM
            const ampm = hours >= 12 ? 'PM' : 'AM';
            // Convert to 12-hour format
            const hours12 = hours % 12 || 12;
    
            // Create the formatted time string
    
            const formattedTime = `${hours12}:${minutes} ${ampm}`;
            return [dayOfWeek, formattedTime];
    
    }
    function updateSideBar (temp, name, country, icons, datetimeEpoch, datetime,  day1, day2){

 
        //update_background(icons);
        // $("#temperature").html(temp+"&deg;C");
        const F = temp;
        const  C = (5/9) * (F - 32);

        setTemp(C);

    
        // $("#loc").html(name + " ," + country);
    
        
        setIcon(icons);
        // $("#icon").attr("src",`./weather-icons/${icons}.svg`);
    
        console.log((datetimeEpoch, datetime));
    
        const daytime = getDayTime(datetimeEpoch, datetime);
    
        // $("#day-sidebar").html(daytime[0] + " ,"+ daytime[1]);
        setDay({day: daytime[0], time:daytime[1]})
    
        console.log(day1.datetimeEpoch, day1.datetime);
    
        const day1day = getDayTimeNew(day1.datetime);
    
        // $("#image1-text").html(day1day[0]+ ", "+ day1day[2] + " "+  day1day[1] );
        setDay1({day:day1day[0] , month: day1day[2], date:day1day[1]});
    
        const day2day = getDayTimeNew(day2.datetime);
    
        // $("#image2-text").html(day2day[0]+ ", "+ day2day[2] + " "+  day2day[1] );
        setDay2({day:day2day[0] , month: day2day[2], date:day2day[1]});
    
        // $("#image1-sidebar").attr("src",`./weather-icons/${day1.icon}.svg`);
    
        // $("#image2-sidebar").attr("src",`./weather-icons/${day2.icon}.svg`);
        setIcon1(day1.icon);
        setIcon2(day2.icon);
    
    
    
    }
    

    

  return (
    <div className="wrapper-bar">

    
      <div className="sidebar">
          
          <div className="searchbar ">
              <form className="formbar">
                  <button className="searchbutton" id="searchButton" type="submit">Submit</button>
                  <input className="typeinput" value={value} id="searchBox" type="text" placeholder="Search City" onChange={handleOnChange}/>
                  
              </form>
              
        
          </div>
         
          {/* <ul className="dropdown-container" id="suggestions"></ul> */}
          <SuggestionDropdown suggestionList = {suggestionList}/>
         

          
          <div  className="cloud">
              <img id="icon" className="img-bar" src={`./weather-icons/${icon}.svg`}/>
          </div>
          
         
          <div className="location">
              
              <i className="fa-solid fa-location-dot"></i>
              <div id="loc">{address.name + " ," + address.country}</div>
              
          </div>

         
          <div id="temperature" className="temp-bar">
              {Math.trunc(temp,2) + "\u00b0C"}
          </div>

          
          <div id="day-sidebar" className="day">
              {current_day.day + " ," + current_day.time}
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
                  <td className="image-cell"><img id="image1-sidebar" src={`./weather-icons/${icon1}.svg`} alt="Image 1"/></td>
                  <td className="text-cell" id="image1-text">Sun ,Dec 24 </td>

              </tr>
              </tbody>
              </table>

          <table>
          <tbody>
              <tr className="row2">
                  <td className="image-cell" ><img id="image2-sidebar" src={`./weather-icons/${icon2}.svg`} alt="Image 2"/></td>
                  <td className="text-cell" id="image2-text">Mon ,Dec 25 </td>
              </tr>
              </tbody>
          </table>


      </div>
  </div>
   
  );
}
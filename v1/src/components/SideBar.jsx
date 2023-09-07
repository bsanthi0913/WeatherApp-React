import React, { useState } from 'react'
import axios from "axios";

export default function SideBar() {
    const [suggestionList, setList] = useState([]);


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
    console.log(e.target.value);
    //setInput(e.target.value);
    console.log("input is " + e.target.value);
    debounce(searchLocations(e.target.value), 300);
};

function searchLocations(inputValue){
    // let inputValue = box.val();
    const searchList = $("#suggestions");
    //--------------Search bar update---------
    console.log("in funv"+inputValue);
    let filter_input="";
    console.log(inputValue.length);
    for(let i=0;i<inputValue.length;i++)
    {
        if(inputValue[i]===',' || inputValue===' ')
        break;
        else
        filter_input+=inputValue[i];
    }
    inputValue = filter_input;

    console.log("updated data="+inputValue);
    //----------------------------------------

    

    $(".dropdown-container").css( "box-shadow", "0px 5px 10px 0px rgba(0, 0, 0, 0.5)");
    // if(inputValue.lenght >= 3){
        // $.ajax(
        //     {
        //         url: `http://api.geonames.org/searchJSON?q=${inputValue}&name_startsWith=${inputValue}&cities=cities1000&fuzzy=0.8&maxRows=5&username=santhi0913`,
        //         dataType: "json",
        //         success: function (data) {
        //             //console.log(data);
        //             searchList.empty();
                
        //             $.each(data.geonames,  function (index, location) {
        //                 const ListItem = $("<li>").text(location.name + " ," + location.countryName);
        //                 ListItem.addClass("li-bar");
        //                 ListItem.on('click', function () {
        //                     box.val(location.name + " ," + location.countryName);
        //                     getWeather(location.lat,location.lng, location.name, location.countryName);
        //                     searchList.empty();
        //                 } )
        //                 searchList.append(ListItem);
                        
        //             });
                
        //         },
        //         error: function (error) {
        //             //console.log(error);
        //             searchList.html("<li>NO results found</li>");
        //         } 

        //     }
        
        // )

        const url = `http://api.geonames.org/searchJSON?q=${inputValue}&name_startsWith=${inputValue}&cities=cities1000&fuzzy=0.8&maxRows=5&username=santhi0913`;
        axios.get(url).then(response => {
            let data = response.data;
            (data.geonames).map(location => {
                setList([...suggestionList, (location.name + " ,"+ location.countryName )]);
            })
        })

        suggestionList.map(location => {
            console.log("list"+location);
        })

    searchList.empty();
    $(".dropdown-container").css( "box-shadow", "");
};


  return (
    <div className="wrapper-bar">

    
      <div className="sidebar">
          
          <div className="searchbar ">
              <form>
                  <button id="searchButton" type="submit">Submit</button>
                  <input id="searchBox" type="text" placeholder="Search City" onChange={handleOnChange}/>
                  
              </form>
              
        
          </div>
         
          <ul className="dropdown-container" id="suggestions"></ul>
         

          
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
   
  )
}

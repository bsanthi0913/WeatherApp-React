import React from 'react'
import axios from 'axios'

const GetWeatherInfo = (lat, lon) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/?key=6JUJ3PJZUX8R3QQZYEG7VEG9R `;
  return axios.get(url).then(response => response.data);
}

export default GetWeatherInfo;
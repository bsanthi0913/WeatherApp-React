import React from 'react'

export default function GetLatLon(ip) {
    const url = `http://api.ipstack.com/${ip}?access_key=077d8e43b7fca3f7e71fe17ab0a0d8c3`;
    return axios.get(url).then(response => response.data);
}

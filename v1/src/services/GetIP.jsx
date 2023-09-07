import React from 'react'

export default function GetIP() {
    const url = `https://api.ipify.org?format=json`;
    return axios.get(url).then(response => response.data);
}

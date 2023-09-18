import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-kivmntykpal0kzhu.us.auth0.com"
    clientId="sEXr43MKEDjvzGfwZ7aK6H2ivDreRo7B"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'; 
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> 

    <Auth0Provider
      domain="dev-olonmiawtwv1d35m.us.auth0.com"
      clientId="3ReD41sId9VHqoD4tuP7cHNy6Lziya3F"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </Provider>
);



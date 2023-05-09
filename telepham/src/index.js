import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-mh8vnmqru04536pt.us.auth0.com"
  clientId="eWKnSISuXz4FYXiDYSDBhcadmsEkHD6W"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
>
  <BrowserRouter>
    <Provider store={store}>

      <ChakraProvider  >
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ChakraProvider>
    </Provider>

  </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

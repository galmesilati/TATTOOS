import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import TattooTreatment from './Components/TattooTreatment';
import Contact from './Components/Contact';
import Crew from './Components/Crew';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';

axios.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: 'TattooTreatment',
        element: <TattooTreatment />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'Crew',
        element: <Crew />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

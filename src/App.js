import React from 'react';
import './App.css';
import  Weather from './Weather.js';

export default function App() {
  return(
    <div className='App'>
      <div className='container'>
      <Weather defaultCity="Nairobi" />
        <footer>
        This project was coded by{" "}
          <a
            href="wanjikungaruiya71@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wanjiku Ngaruiya
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Shikonga/weather-react-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-react-project-nairobi.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      
      </div>
    </div>
    
  )
}
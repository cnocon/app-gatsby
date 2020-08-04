import React from "react"
import weatherAppImg from "../../images/weather-app-screenshot.png"

const PortfolioList = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h2>Weather Charts App</h2>
        <p>
          <a href="https://github.com/cnocon/weather-charts-app-new" target="_blank" rel="noreferrer">Github</a>
          &nbsp;|&nbsp; 
          <a href="https://weather-charts-app.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
        </p>
        
        <img src={weatherAppImg} alt="Screenshot of Weather Charts App" />
        <p><b>Summary:</b> This app lets you see a 7-day forecast including temperature, pressure, and humidity for any major U.S. city you search for. As a bonus, you can see the city rendered in satellite view in a Google Map.</p>
        <h4>Technologies:</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Google Maps API</li>
          <li>Open Weather API</li>
          <li>Lodash</li>
        </ul>
      </div>

      <div className="col-sm-12 col-md-6">
        <h2>Another App</h2>
        <p>
          <a href="https://github.com/cnocon/weather-charts-app-new" target="_blank" rel="noreferrer">Github</a>
          &nbsp;|&nbsp; 
          <a href="https://weather-charts-app.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
        </p>
        <h4>Technologies:</h4>
        <ul>
          <li>Something</li>
          <li>Something else</li>
        </ul>

      </div>

      <div className="col-sm-12 col-md-6">
        <h2>Another App</h2>
        <p>
          <a href="https://github.com/cnocon/weather-charts-app-new" target="_blank" rel="noreferrer">Github</a>
          &nbsp;|&nbsp; 
          <a href="https://weather-charts-app.netlify.app/" target="_blank" rel="noreferrer">Demo</a>
        </p>
        <h4>Technologies:</h4>
        <ul>
          <li>Something</li>
          <li>Something else</li>
        </ul>
      </div>
    </div> 
  )
}

export default PortfolioList;
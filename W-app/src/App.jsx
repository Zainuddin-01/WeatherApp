import { useState } from 'react'
import './App.css'

function WeatherApp() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const weatherApi = async () => {
    const api = 'User your ApiKey...';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
      setWeather(data);
    })
    .catch((err)=> {
      console.log(`Error fetching ${err}`)
    })
  }

  return (
    <>
      <div style={container}> 
        <h2 style={headingStyle}>Weather App</h2>

      <div style={midContainer}>

        <input style={inputStyle} type="text"
         placeholder='Entry city...'
         value={city}
         onChange={(e)=> setCity(e.target.value)}/>
         
         <button style={btn} onClick={weatherApi}>Get weather</button>

        </div>

        {weather &&(
          <div>
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default WeatherApp



const container = {
  paddingTop: '0',
  fontFamily: 'verdana',
  textAlign: 'center',
  color: '#291d09'
}

const midContainer = {
  display: 'flex',
  alignItems: 'center',
}

const inputStyle = {
  width: '300px',
  fontSize: '15px',
  borderRadius: '5px',
  border: 'none',
  padding: '13.5px',
  color: 'white',
  backgroundColor: '#bf8404'
}

const btn = {
  color: '#fff',
  padding: '12px',
  backgroundColor: '#291d09'
}

const headingStyle = {
  fontWeight: '800',
  fontSize: '30px'
}

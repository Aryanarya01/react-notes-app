import React, { useState } from 'react'
import SearchComponent from './SearchComponent';
import InfoComponent from './infoComponent';
const WeatherComponent = () => {
    const [weatherInfo, setWeatherInfo] = useState("");
     

    const updateInfo = (newInfo)=>{
      console.log(newInfo);
      setWeatherInfo(newInfo)
    }
  return (
    <div className='outer'>
        <div className='inner'>
          <SearchComponent updateInfo={updateInfo}/>
          <InfoComponent weatherInfo={weatherInfo}/>
        </div>
    </div>
  )
}

export default WeatherComponent
import React, { useEffect, useState } from "react";

const SearchComponent = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8c687fd4dbe347b6046636b37c4370ae";
  
    useEffect(()=>{
      const timer = setTimeout(()=>setError(false),2000);
      return () => clearTimeout(timer);
     
    },[error]);

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        speed: jsonResponse.wind.speed,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      return result;
      console.log(result);
    } catch (err) {
      throw err;
    }
  };
  const handelChange = (event) => {
    setCity(event.target.value);
  };

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <h1>
        <span style={{ color: "#7c3aed" }}>Atmosphere</span> Flow Data
      </h1>
      <form onSubmit={handelSubmit} className="searchForm">
        <input
          id="City"
          label="City Name"
          variant="outlined"
          onChange={handelChange}
          value={city}
          required
        />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <br /><br />
         
      </form>
      {error && <p style={{ display: "block", marginTop: "1rem", color:"black",padding:"1rem",border:"1px solid red", backgroundColor:"#ff7f7f",fontWeight:"700" }}>NO SUCH PLACE EXIST</p>}

    </div>
  );
};

export default SearchComponent;

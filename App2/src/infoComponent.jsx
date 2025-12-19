import React from "react";

const InfoComponent = ({ weatherInfo }) => {
   const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1713261546556-73f8d4e8bf7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let bgImage = INIT_URL;

  if (weatherInfo.humidity > 80) {
    bgImage = RAIN_URL;
  } else if (weatherInfo.temp > 15) {
    bgImage =HOT_URL;
  } else if (weatherInfo.temp < 15) {
    bgImage = COLD_URL;
  }
    return (
    <div className="infoComp"   style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
     
  }}>
      <div className="temperature">
        <p style={{fontSize:"3rem",color:"white"}}>
          <i class="fa-solid fa-temperature-full"></i>
          <br />
        {weatherInfo.temp && `${weatherInfo.temp}° C`}

          <p style={{fontSize:"1rem"}}>{new Date().toDateString()}</p>
        
        </p>
        
        <p>{weatherInfo.city}</p>
      </div>
      

  {/* Bottom 3 boxes */}
  <div className="bottomInfo">
    <div className="bottomBox"><i class="fa-solid fa-droplet"></i> <br />HUMIDITY <br />  <br /> {weatherInfo.humidity}</div>
    <div className="bottomBox"><i class="fa-solid fa-bolt"></i><br />WEATHER <br /> <br /> {weatherInfo.weather}</div>
    <div className="bottomBox"><i class="fa-solid fa-wind"></i> <br />SPEED<br /><br />{weatherInfo.speed} </div>
  </div>
    </div>
  );
};

export default InfoComponent;

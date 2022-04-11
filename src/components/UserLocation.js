import React from "react";
import "../App.css";

function helo(e){
    if(e<19){

        document.getElementById("background").classList.remove("Cold");
        document.getElementById("background").classList.remove("Hot");
        document.getElementById("background").classList.add("Cold");
    }
  

   if(e>19)
   {
    document.getElementById("background").classList.remove("Cold");
    document.getElementById("background").classList.remove("Hot");
    document.getElementById("background").classList.add("Hot");
   }


}

export default function UserLocation(props) {
 const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } =
  props.weather;

helo(temperature);
 return (


  <div className="user-weather">
   <div className="row">
    <div className="col-md-9 weather-temp">
     <h4>
      {temperature}
      <sup>o</sup>C , {description}
     </h4>
     <h2>{location}</h2>
     <p>
      {region} , {country}
     </p>
    </div>

    <div className="col-md-3">
     <img className="mainImg" src={img} alt="weather-img" />

 
    </div>
   </div>

   <div className="row">
    <div className="col-md-3 weather-info">
     <p>
      <b>Wind Speed</b>(km/hr)
     </p>
     <h2>{wind_speed}</h2>
    </div>

    <div className="col-md-3 weather-info">
     <p>
      <b>Preassure</b>(millibar)
     </p>
     <h2>{pressure}</h2>
    </div>

    <div className="col-md-3 weather-info">
     <p>
      <b>Precipitation</b>(mm)
     </p>
     <h2>{precip}</h2>
    </div>

    <div className="col-md-3 weather-info">
     <p>
      <b>Humidity</b>(%)
     </p>
     <h2>{humidity}</h2>
    </div>
   </div>
  </div>
 );
}

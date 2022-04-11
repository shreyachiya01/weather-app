import React from "react";

export default function Predict(props) {
 const {  hour1, hour2, hour3, hour4, hour5, tomorrowTemp, dATTemp,  time1, time2, time3, time4, time5, iconFullyUrlHour1 ,iconFullyUrlHour2 ,iconFullyUrlHour3 ,iconFullyUrlHour4 ,iconFullyUrlHour5 } =
  props.eather;
return(
                
    
  <div className="user-weather">
  <div className="row">
  
  <div className="col-md-1 weather-info">
    
    </div>

   <div className="col-md-1 weather-info">
    <p>
     <b>{time1}:00</b>   
    </p>
    <h2>{hour1}<sup>o</sup>C</h2>
   </div>
   <div className="col-md-1">
     <img className="mainImg" src={iconFullyUrlHour1} alt="weather-img" />
    </div>

   <div className="col-md-1 weather-info">
    <p>
     {time2}:00   
    </p>
    <h2>{hour2}<sup>o</sup>C</h2>
   </div>
   <div className="col-md-1">
     <img className="mainImg" src={iconFullyUrlHour2} alt="weather-img" />
    </div>

   <div className="col-md-1 weather-info">
    <p>
     <b>{time3}:00</b>
    </p>
    <h2>{hour3}<sup>o</sup>C</h2>
   </div>
   <div className="col-md-1">
     <img className="mainImg" src={iconFullyUrlHour3} alt="weather-img" />
    </div>
   <div className="col-md-1 weather-info">
    <p>
     <b>{time4}:00</b>
    </p>
    <h2>{hour4}<sup>o</sup>C</h2>
   </div>
   <div className="col-md-1">
     <img className="mainImg" src={iconFullyUrlHour4} alt="weather-img" />
    </div>
   <div className="col-md-1 weather-info">
    <p>
     <b>{time5}:00</b>
    </p>
    <h2>{hour5}<sup>o</sup>C</h2>
   </div>
   <div className="col-md-1">
     <img className="mainImg" src={iconFullyUrlHour5} alt="weather-img" />
    </div>
     </div>
     <div className="row">
   <div className="col-md-12 weather-info">
     <br></br>
     <br></br>
    </div>
  </div>
 <div className="row" >
 
<div className="col-md-6 weather-info">
 <p>
  <b>Tomorrow</b><sup>o</sup>C
 </p>
 <h2>{tomorrowTemp}</h2>
</div>
<div className="col-md-6 weather-info">
 <p>
  <b>Day After Tomorrow</b><sup>o</sup>C
 </p>
 <h2>{dATTemp}</h2>
</div>
</div>
</div>

);

}

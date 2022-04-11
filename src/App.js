import React from "react";
import UserLocation from "./components/UserLocation.js";
import Prediction from "./components/Prediction.js";

import Navbar from "./components/Navbar.js";
import "./App.css";
import Axios from "axios";

class App extends React.Component {

 state = {
  userPosition: {
   latitude: 35,
   longitude: 139,
  },
  weather: {},
  eather: {},
  
  regionInput: "",
 };

 componentDidMount() { //lifecycle  method
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition((position) => {
    let pos = {
     latitude: position.coords.latitude,
     longitude: position.coords.longitude,
    };

    this.setState({ userPosition: pos });//change dynamic data
    
    
    Axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.userPosition.latitude}&lon=${this.state.userPosition.longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`
    
).then((emp) => {
         console.log(emp)
         let usereather = {
            hourNow : emp.data.hourly[0].temp,
            hour1 : emp.data.hourly[1].temp,
            hour2 : emp.data.hourly[2].temp,
            hour3 : emp.data.hourly[3].temp,
            hour4 : emp.data.hourly[4].temp,
            hour5 : emp.data.hourly[5].temp,
            time1 : new Date().getHours() + 1,
            time2 : new Date().getHours() + 2,
            time3 : new Date().getHours() + 3,
            time4 : new Date().getHours() + 4,
            time5 : new Date().getHours() + 5, tomorrowTemp : Math.round(emp.data.daily[0].temp.day),
            dATTemp : Math.round(emp.data.daily[1].temp.day),
           // tomorrowMain : emp.data.daily[0].weather[0].main,
            //dATTempMain : emp.data.daily[1].weather[0].main,
            iconFullyUrlHourNow : "http://openweathermap.org/img/wn/" + emp.data.hourly[0].weather[0].icon + ".png",
            iconFullyUrlHour1 : "http://openweathermap.org/img/wn/" + emp.data.hourly[1].weather[0].icon + ".png",
            iconFullyUrlHour2 : "http://openweathermap.org/img/wn/"+ emp.data.hourly[2].weather[0].icon + ".png",
            iconFullyUrlHour3 : "http://openweathermap.org/img/wn/"+emp.data.hourly[3].weather[0].icon + ".png",
            iconFullyUrlHour4 : "http://openweathermap.org/img/wn/" + emp.data.hourly[4].weather[0].icon + ".png",
            iconFullyUrlHour5 : "http://openweathermap.org/img/wn/" + emp.data.hourly[5].weather[0].icon + ".png",};
         this.setState({ eather: usereather });
    });


    
    Axios.get(
     `http://api.weatherstack.com/current?access_key=1f87250d423dac224830c2aac54e0fcf&query=${this.state.userPosition.latitude},${this.state.userPosition.longitude}`
    ).then((res) => {       
     let userWeather = {   
      temperature: res.data.current.temperature,
      description: res.data.current.weather_descriptions[0],
      location: res.data.location.name,
      region: res.data.location.region,
      country: res.data.location.country,
      wind_speed: res.data.current.wind_speed,
      pressure: res.data.current.pressure,
      precip: res.data.current.precip,
      humidity: res.data.current.humidity,
      img: res.data.current.weather_icons,
      lat:res.data.location.lat,
      lon:res.data.location.lon,
     };
     this.setState({ weather: userWeather });
    });
   });
  }
 }
 changeRegion = (value) => {
  this.setState({ regionInput: value }); 
 };

 changeLocation = (e) => {
  e.preventDefault(); //form tag

  Axios.get(
   `http://api.weatherstack.com/current?access_key=1f87250d423dac224830c2aac54e0fcf&query=${this.state.regionInput}`
  ).then((res) => {
    console.log(res)
   let userWeather = {
    temperature: res.data.current.temperature,
    description: res.data.current.weather_descriptions[0],
    location: res.data.location.name,
    region: res.data.location.region,
    country: res.data.location.country,
    wind_speed: res.data.current.wind_speed,
    pressure: res.data.current.pressure,
    precip: res.data.current.precip,
    humidity: res.data.current.humidity,
    img: res.data.current.weather_icons,
    lat:res.data.location.lat,
      lon:res.data.location.lon,
   };
   this.setState({ weather: userWeather });
  });
Axios.get(   `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.weather.lat}&lon=${this.state.weather.lon}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`
   
).then((emp) => {
        
        let usereather = {
            hourNow : emp.data.hourly[0].temp,
            hour1 : emp.data.hourly[1].temp,
            hour2 : emp.data.hourly[2].temp,
            hour3 : emp.data.hourly[3].temp,
            hour4 : emp.data.hourly[4].temp,
            hour5 : emp.data.hourly[5].temp,        
            time1 : new Date().getHours() + 1,
            time2 : new Date().getHours() + 2,
            time3 : new Date().getHours() + 3,
            time4 : new Date().getHours() + 4,
            time5 : new Date().getHours() + 5,
            tomorrowTemp : Math.round(emp.data.daily[0].temp.day),
            dATTemp : Math.round(emp.data.daily[1].temp.day),
          //  tomorrowMain : emp.data.daily[0].weather[0].main,
           // dATTempMain : emp.data.daily[1].weather[0].main,
            iconFullyUrlHourNow : "http://openweathermap.org/img/wn/" + emp.data.hourly[0].weather[0].icon + ".png",
            iconFullyUrlHour1 : "http://openweathermap.org/img/wn/" + emp.data.hourly[1].weather[0].icon + ".png",
            iconFullyUrlHour2 : "http://openweathermap.org/img/wn/"+ emp.data.hourly[2].weather[0].icon + ".png",
            iconFullyUrlHour3 : "http://openweathermap.org/img/wn/"+emp.data.hourly[3].weather[0].icon + ".png",
            iconFullyUrlHour4 : "http://openweathermap.org/img/wn/" + emp.data.hourly[4].weather[0].icon + ".png",
            iconFullyUrlHour5 : "http://openweathermap.org/img/wn/" + emp.data.hourly[5].weather[0].icon + ".png",
        };
        this.setState({ eather: usereather });
   });

    
 
 };

 render() {
  return (
   <div className="App" id="background" >
    <div className="container">
     <Navbar changeRegion={this.changeRegion} changeLocation={this.changeLocation} />
     <UserLocation weather={this.state.weather} />
     <Prediction eather={this.state.eather} />
    
    </div>
   </div>
  );
 }
}

export default App;
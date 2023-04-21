import React, { useState } from "react";

import PropTypes from "prop-types";


const WeatherUpdate = React.createContext();


export function useWeatherUpdate() {
  const context = React.useContext(WeatherUpdate);
  if (context === undefined) {
    throw new Error("useLocation must be used within a WeatherProvider");
  }
  return context;
}

function WeatherContext({ children }) {

 
    const [weatherData, setweatherData] = useState(null);
    const [error , seterror] = useState(null)
    const [loading , setloading] = useState(false)
    
    const updateWeatherData = (value)=>{
      setweatherData(value)
    }
    
    const updateError = (err)=>{
      seterror(err)
    }

    const stopLoading = ()=>{
      setloading(false)
    }
    const startLoading = ()=>{
      setloading(true)
    }
  return (
      <WeatherUpdate.Provider value={{weatherData,updateWeatherData,error,updateError,loading,stopLoading,startLoading}}>{children}</WeatherUpdate.Provider>

  );
}

WeatherContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WeatherContext;

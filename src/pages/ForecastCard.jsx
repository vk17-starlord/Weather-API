import React from 'react'
import Alert from '../components/alert'

function ForecastCard({forecast}) {
  return (
    <div className='w-full bg-white shadow-md rounded-xl p-5'>
        <h1 className=''><span className=''>Date</span> - {forecast.date}</h1>
        <h1 className="my-2.5 flex items-center justify-start text-gray-600"> <span className="font-bold">Weather</span>  :  {forecast?.day?.condition.text }  
            <img src={forecast?.day.condition.icon} className="w-8 h-8 mx-1" alt="" />
            </h1>
            <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Humidity </span>  :  {forecast.day.avghumidity} </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Temperature</span>  :  {forecast.day.avgtemp_c }  ℃  </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Precipitation in mm </span>  :  {forecast.day.totalprecip_mm } mm </h1>
                <h1 className='my-2  font-bold'> Temperature status </h1>
                <Alert val={forecast?.day.avgtemp_c} min={10} max={35} dangermsg="Weather too hot !!" ></Alert>
                <h1 className='my-2  font-bold'> Precipitation status </h1>
                <Alert val={forecast.day.totalprecip_mm} min={-1} max={60} dangermsg="Flood conditions not suitable for crop cultivation !!" ></Alert>
                <h1 className='my-2  font-bold'> Humidity status </h1>

                <Alert val={forecast.day.avghumidity} min={10} max={60} dangermsg="Too much humidity !!" ></Alert>
  
    </div>
  )
}

export default ForecastCard
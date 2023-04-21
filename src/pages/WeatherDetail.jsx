import ForecastCard from "./ForecastCard"

function WeatherDetail({data}) {
    console.log(data)
  return (
    <div className='w-full py-10 text-black '>
        
        <div className="grid gap-10 grid-cols-2 ">
            
            <div className="col  bg-white rounded-xl shadow-md p-5">
                <h1 className="my-2.5 font-bold text-2xl mb-5">   Location Details </h1>
                <div className="w-full grid grid-cols-2">
                    <div className="col">        
               <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Country</span> :  {data?.location?.country } </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">City</span>  :  {data?.location?.name } </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Latitude </span>  :  {data?.location?.lat } </h1>

              </div>
                    <div className="col">
                    <h1 className="my-2.5 text-gray-600"> <span className="font-bold">State</span>  :  {data?.location?.region } </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Local Time</span>  :  {data?.location?.localtime } </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Longitude </span>  :  {data?.location?.lon } </h1>
                    </div>
                    
    

                </div>
       
     
            </div>
            <div className="col bg-white rounded-xl shadow-md p-5">
            <h1 className="my-2.5 font-bold text-2xl mb-5"> Current Weather </h1>
          <div className="div grid grid-cols-2">
            <div className="col">
            <h1 className="my-2.5 flex items-center justify-start text-gray-600"> <span className="font-bold">Weather</span>  :  {data?.current?.condition.text }  
            <img src={data?.current.condition.icon} className="w-8 h-8 mx-1" alt="" />
            </h1>
            <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Feels Like </span> :  {data?.current?.feelslike_c } ℃ </h1>

            </div>
            <div className="col">
            <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Humidity </span>  :  {data?.current?.humidity } </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Temperature </span>  :  {data?.current?.temp_c } </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Wind Speed </span>  :  {data?.current?.wind_kph } KPH </h1>
                <h1 className="my-2.5 text-gray-600"> <span className="font-bold">Precipitation in mm </span>  :  {data?.current?.precip_mm } KPH </h1>

            </div>
          </div>
             

            </div>

        </div>
        <h1 className="font-bold text-3xl mt-10 mb-5 ">Forecast For 9 Days </h1>
        <div className="w-full gap-5 grid grid-cols-3 my-10">


            
        {
                data?.forecast?.forecastday.map((data,idx)=>{
                    return <ForecastCard key={idx} forecast={data} ></ForecastCard>;
                })
             }

        </div>

        
        
    </div>
  )
}

export default WeatherDetail
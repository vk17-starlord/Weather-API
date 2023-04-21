import { useState , useEffect } from 'react';
import { getLocationKey } from '../api/Location';
import { useWeatherUpdate } from '../context/WeatherContext';

function Autocomplete() {
 
 const [inputValue, setInputValue] = useState('');
 
   const {updateWeatherData , startLoading ,stopLoading } = useWeatherUpdate()

   const getLocationsData = async(val)=>{
 
    const res = await getLocationKey(val)
    if(res.data){
        updateWeatherData(res.data)
        console.log('data arrived',res.data)
        stopLoading()
    }else{
        stopLoading()
        console.log('error occurred',res.err)
    }
   }

   const onSearch = ()=>{
    startLoading()
    getLocationsData(inputValue)
   }

  

  return (
    <div className="relative flex w-full  my-10">
      <input
      type="text"
        className="border border-gray-300  px-4 py-2 w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={()=>onSearch()} className='w-max px-10 py-2.5 bg-black text-white '>search</button>
    </div>
  );
}

export default Autocomplete;

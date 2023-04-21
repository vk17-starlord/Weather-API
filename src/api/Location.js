import axios from "axios"
import { apiKey, BaseURL } from "./config"

export const getLocationKey = async(value,days=9)=>{
    // const URL = `${BaseURL}`
  return await axios.get(`${BaseURL}?key=${apiKey}&q=${value}&days=${days}&aqi=no&alerts=yes`,{}).then((res)=>{
        return {data:res.data};
    }).catch(()=>{
       return {err:'error occurred'}
    })
}
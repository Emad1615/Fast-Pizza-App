import { useState } from "react";

export function formatDate(str) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(str));
}
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
export function calcMinutesLeft(value) {
  const date1 = new Date().getTime();
  const date2 = new Date(value).getTime();
  return Math.round((date2 - date1) / 60000);
}
export function getPosition(){
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(resolve,reject)
  })
}


export function usePosition(){
  const [isLoading,setIsLoading]=useState(false);
  const [latitude,setLatitude]=useState(null)
  const [longitude,setLongitude]=useState(null)
  const [error,setError]=useState("")
 
  function getPosition(){
    if(!navigator.geolocation) setError("Browser not support this feature");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(pos=>{
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
      setIsLoading(false)
    })
  }
  return {isLoading,latitude,longitude,error,getPosition}
}
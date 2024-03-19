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

export function usePosition(defaultPosition=null){
  const [isLoading,setIsLoading]=useState(false);
  const [position,setPosition]=useState(defaultPosition)
  const [error,setError]=useState("")
  function getPosition(){
    if(!navigator.geolocation) throw Error("Browser not support this feature");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((pos)=>{
        setPosition({
          latitude:pos.coords.latitude,
          longitude:pos.coords.longitude,
        })
        setIsLoading(false)
    },
    (error)=>{
      setError(error.message);
      setIsLoading(false);
    }
    )
  }
  return {isLoading,error,getPosition,position}
}
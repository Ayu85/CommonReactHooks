import { useEffect, useState } from "react"

const useFetch=(url)=>{
  const [data,setData]=useState()
  useEffect(()=>{
    const getData=async()=>{
      const res=await fetch(url)
      const json=await res.json()
      setData(json)
    }
    getData()
  },[])
  return {data};
}

export default useFetch;
import { useEffect, useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

export default function Parent(){
  const [count,setcount]=useState(0)
  useEffect(()=>{
    setInterval(function(){
      setcount(count+1)
    },5000)
  },[count])
  return <div>Parent
  <Child1/>
  <Child2/>
  </div>
}
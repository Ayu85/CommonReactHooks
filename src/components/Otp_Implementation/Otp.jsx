import { useRef, useState } from "react"

const Otp=()=>{
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()
  const ref5=useRef()
  const ref6=useRef()
  const [disabled,setDisabled]=useState(true)
  return <div className="flex flex-col items-center gap-3 justify-center h-screen">
  <h1>OTP</h1>
  <div className="space-x-3" > 
  <SubOtp reference={ref1} onDone={()=>{
    ref2.current.focus()
  }}/>
  <SubOtp reference={ref2} onDone={()=>{
    ref3.current.focus()
  }}/>
  <SubOtp reference={ref3} onDone={()=>{
    ref4.current.focus()
  }}/>
  <SubOtp reference={ref4}onDone={()=>{
    ref5.current.focus()
  }}/>
  <SubOtp reference={ref5} onDone={()=>{
    ref6.current.focus()
  }}/>
  <SubOtp reference={ref6} onDone={()=>{
    setDisabled(false)
  }}/>
    </div>
    <button disabled={disabled} className="bg-blue-500 px-4 disabled:bg-blue-100 disabled:cursor-not-allowed py-3 rounded-xl">Submit</button>
  </div>
}

const SubOtp=({reference,onDone})=>{
  
return <input onChange={()=>onDone()} ref={reference} type="text" className="bg-blue-200 font-bold border text-center text-black rounded-xl w-20 h-12" placeholder=""/>

}

export default Otp;
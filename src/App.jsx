import { useState } from "react";
import "./index.css";
import useCounter from "./components/customHooks/useCounter";
import useFetch from "./components/customHooks/useFetch";
import FocusInput from "./components/useRef/Case1";
import Chat from "./components/useRef/Case2";
import Stopwatch from "./components/useRef/Case3";
import usePrev from "./components/customHooks/usePrev";
import DebouncedComponent from "./components/customHooks/useDebounce";
import Parent from "./components/memo/Parent";
import Otp from "./components/Otp_Implementation/Otp";

export default function App() {
  const { value, increment, decrement } = useCounter();
  const { data } = useFetch('https://dummyjson.com/users');
const [count,setCount]=useState(0)
  const prev=usePrev(count)
  return (
    <main className="bg-blue-900 text-white h-screen">
      {/* <FocusInput /> */}
      {/* <Chat/> */}
      {/* <Stopwatch/> */}
      {/* {value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
      {/* {JSON.stringify(data)} */}
      {/* <div>{count}</div>
      <button onClick={()=>setCount(count=>count+1)}>++++</button>
      <button>previous value was {prev}</button> */}
      {/* <DebouncedComponent/> */}
      {/* <Parent/> */}
      <Otp/>
    </main>
  );
}

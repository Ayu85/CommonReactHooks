import "./App.css";
import useCounter from "./components/customHooks/useCounter";
import FocusInput from "./components/useRef/Case1";
import Chat from "./components/useRef/Case2";
import Stopwatch from "./components/useRef/Case3";

export default function App() {
  const {value,increment,decrement}=useCounter()
  return (
    <main>
      {/* <FocusInput /> */}
      {/* <Chat/> */}
      {/* <Stopwatch/> */}
      {value}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </main>
  );
}

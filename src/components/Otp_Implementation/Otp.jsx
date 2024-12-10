import { useRef, useState } from "react";

const Otp = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [disabled, setDisabled] = useState(true);

  const checkOtpCompletion = () => {
    // Check if all OTP fields have a value (i.e., they are filled)
    const isFilled =
      ref1.current.value &&
      ref2.current.value &&
      ref3.current.value &&
      ref4.current.value &&
      ref5.current.value &&
      ref6.current.value;

    setDisabled(!isFilled); // Disable button if not all fields are filled
  };

  return (
    <div className="flex flex-col items-center gap-3 justify-center h-screen">
      <h1>OTP</h1>
      <div className="space-x-3">
        <SubOtp
          reference={ref1}
          onDone={() => ref2.current.focus()}
          onBack={() => {}}
          checkOtpCompletion={checkOtpCompletion}
        />
        <SubOtp
          reference={ref2}
          onDone={() => ref3.current.focus()}
          onBack={() => ref1.current.focus()}
          checkOtpCompletion={checkOtpCompletion}
        />
        <SubOtp
          reference={ref3}
          onDone={() => ref4.current.focus()}
          onBack={() => ref2.current.focus()}
          checkOtpCompletion={checkOtpCompletion}
        />
        <SubOtp
          reference={ref4}
          onDone={() => ref5.current.focus()}
          onBack={() => ref3.current.focus()}
          checkOtpCompletion={checkOtpCompletion}
        />
        <SubOtp
          reference={ref5}
          onDone={() => ref6.current.focus()}
          onBack={() => ref4.current.focus()}
          checkOtpCompletion={checkOtpCompletion}
        />
        <SubOtp
          reference={ref6}
          onDone={() => checkOtpCompletion()} // Final field should check OTP completion
          onBack={() => ref5.current.focus()}
          checkOtpCompletion={checkOtpCompletion}
        />
      </div>
      <button
        disabled={disabled}
        className="bg-blue-500 px-4 disabled:bg-blue-100 disabled:cursor-not-allowed py-3 rounded-xl"
      >
        Submit
      </button>
    </div>
  );
};

const SubOtp = ({ reference, onDone, onBack, checkOtpCompletion }) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      // Valid digit (0-9)
      setInputVal(value);
      onDone(); // Move to next input field
      checkOtpCompletion(); // Check if OTP is complete
    } else if (value === "") {
      // Empty input, trigger back navigation
      setInputVal("");
      onBack(); // Move to previous input field
    }
  };

  return (
    <input
      ref={reference}
      value={inputVal}
      onChange={handleChange}
      type="text"
      className="bg-blue-200 font-bold border text-center text-black rounded-xl w-20 h-12"
      placeholder=""
    />
  );
};

export default Otp;

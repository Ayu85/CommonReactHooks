import { useState, useRef } from "react";

// Custom hook for debouncing
const useDebounce = (originalFn, delay = 200) => {
  const currentClock = useRef(null);

  function debounceFn() {
    // Clear previous timeout and set a new one
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(() => {
      originalFn();
    }, delay);
  }

  return debounceFn;
};

const DebouncedComponent = () => {
  const hitBackend = () => {
    console.log("Request sent");
  };

  const debounceCall = useDebounce(hitBackend);

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => debounceCall()}
      />
    </div>
  );
};

export default DebouncedComponent;

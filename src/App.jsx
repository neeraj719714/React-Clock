import React, { useState, useEffect } from "react";

import "./App.css";
import Clock from "./Clock";
import Display from "./Display";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Update seconds and minutes
  useEffect(() => {
    // Update seconds every second
    const secondInterval = setInterval(() => {
      setSeconds((seconds) => (seconds + 1) % 60);
    }, 1000);
    // Update minutes every 60 seconds
    const minuteInterval = setInterval(() => {
      setMinutes((minutes) => (minutes + 1) % 60);
    }, 60000);
    return () => {
      clearInterval(secondInterval);
      clearInterval(minuteInterval);
    };
  }, []);

  return (
    <div id="app">
      <Clock
        seconds={seconds}
        minutes={minutes}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <Display
        seconds={seconds}
        minutes={minutes}
        setMinutes={setMinutes}
        setSseconds={setSeconds}
      />
    </div>
  );
}

export default App;

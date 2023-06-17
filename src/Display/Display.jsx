import React from "react";
import "./display.css";

const Display = ({ seconds, minutes, setSseconds, setMinutes }) => {
  return (
    <div className="display">
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSseconds(e.target.value)}
      />
    </div>
  );
};

export default Display;

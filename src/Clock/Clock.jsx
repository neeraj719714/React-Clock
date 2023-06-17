import React, { useState } from "react";

import "./clock.css";
import { getAngleFromMousePosition } from "../utils";

const Clock = ({ seconds, minutes, setSeconds, setMinutes }) => {
  const [isDraggingSecond, setIsDraggingSecond] = useState(false);
  const [isDraggingMinute, setIsDraggingMinute] = useState(false);

  // make hands draggable circularly and update time
  const onMouseDown = (hand) => {
    hand === "second" ? setIsDraggingSecond(true) : setIsDraggingMinute(true);
  };

  const onMouseMove = (e) => {
    if (isDraggingSecond) {
      const angle = getAngleFromMousePosition(e);
      const newSeconds = (60 + Math.round((angle + 90) / 6)) % 60;
      setSeconds(newSeconds);
    }
    if (isDraggingMinute) {
      const angle = getAngleFromMousePosition(e);
      const newMinutes = (60 + Math.round((angle + 90) / 6)) % 60;
      setMinutes(newMinutes);
    }
  };

  const onMouseUp = () => {
    setIsDraggingMinute(false);
    setIsDraggingSecond(false);
  };

  // Calculate angle for minute hand from vertical position
  const minuteHandAngle = minutes * 6 - 90;
  // Calculate angle for second hand from vertical position
  const secondHandAngle = seconds * 6 - 90;

  return (
    <div className="clock">
      <div
        className="clock-face"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div
          className="hand min-hand"
          style={{ transform: `rotate(${minuteHandAngle}deg)` }}
          onMouseDown={() => onMouseDown("minute")}
        ></div>
        <div
          className="hand sec-hand"
          style={{ transform: `rotate(${secondHandAngle}deg)` }}
          onMouseDown={() => onMouseDown("second")}
        ></div>
      </div>
    </div>
  );
};

export default Clock;

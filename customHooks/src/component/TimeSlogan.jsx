import React from "react";
import useClock from "../hooks/useClock";  // ⬅️ use your custom hook

let TimeSlogan = () => {
  const time = useClock(); // ✅ use the hook

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default TimeSlogan;


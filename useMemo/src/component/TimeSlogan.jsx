
// useMemo is used when you return a value
// This works because useMemo returns the same function reference unless dependencies change — just like useCallback.

import { useEffect, useState, useMemo } from "react";

let TimeSlogan = () => {
  const [time, setTime] = useState(new Date());

  // ✅ useMemo returns a stable function reference (like useCallback)
  const updateTime = useMemo(() => {
    return () => setTime(new Date());
  }, []); // memoized function

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default TimeSlogan;


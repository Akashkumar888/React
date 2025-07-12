
// It is simply used to memoize a function, and it only re-creates the function if the dependencies change.
// React only re-renders when:
// useState changes, or
// props change

import { useEffect, useState, useCallback } from "react";

let TimeSlogan = () => {
  const [time, setTime] = useState(new Date());

  // ⏱️ useCallback version of the time updater
  const updateTime = useCallback(() => {
    setTime(new Date());
  }, []); // No dependency (it never changes)

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000); // use the memoized function
    return () => clearInterval(intervalId);
  }, [updateTime]); // ✅ add updateTime as a dependency (safe because it's stable)

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default TimeSlogan;

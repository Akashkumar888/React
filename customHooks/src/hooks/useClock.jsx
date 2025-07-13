
import { useState, useEffect, useCallback } from "react";

const useClock = () => {
  const [time, setTime] = useState(new Date());

  const updateTime = useCallback(() => {
    setTime(new Date());
  }, []);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  return time;
};

export default useClock;



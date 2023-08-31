import React from "react";
import { useState, useEffect } from "react";
import "../css/counter.css";

const Counter = ({ targetNumber, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count < targetNumber) {
        const increment = Math.ceil(targetNumber / (duration / 30));
        const timer = setInterval(() => {
          setCount(prevCount => Math.min(prevCount + increment, targetNumber));
        }, 30);
        return () => clearInterval(timer);
      }
    }, [count, targetNumber, duration]);

  return (
    <>
        <div className="counter">
      <div className="counter-value">{count}</div>
    </div>
    </>
  );
};

export default Counter;

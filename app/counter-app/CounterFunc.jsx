"use client";

import { useState } from "react";

export default function CounterFunc() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="flex gap-6 justify-center py-8 text-4xl font-semibold">
        <p>{count % 2 === 0 ? "Even:" : "Odd:"}</p>
        <p>{count}</p>
      </div>
      <div className=" flex items-center justify-center gap-3">
        <button
          onClick={handleIncrement}
          className="btn btn-outline btn-success"
        >
          Increment
        </button>
        <button onClick={handleReset} className="btn btn-outline btn-error">
          Reset
        </button>
        <button
          onClick={handleDecrement}
          className="btn btn-outline btn-primary"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function SumCalculator() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const sum = firstNumber + secondNumber;

  const handleReset = () => {
    setFirstNumber(null);
    setSecondNumber(null);
  };

  return (
    <div>
      <p className="text-4xl my-8 font-semibold text-center">{sum}</p>
      <div className="grid gap-4">
        <label htmlFor="first-number">First Number</label>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          id="first-number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseInt(e.target.value) || 0)}
        />
        <label htmlFor="second-number">Second Number</label>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          id="second-number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseInt(e.target.value) || 0)}
        />
        <button onClick={handleReset} className="btn btn-outline btn-error">
          Reset
        </button>
      </div>
    </div>
  );
}

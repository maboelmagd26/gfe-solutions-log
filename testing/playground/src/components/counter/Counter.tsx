import { useState } from "react";

type CounterProps = { initialCount?: number };

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCounter] = useState(initialCount ?? 0);
  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }
  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }
  function handleReset() {
    setCounter(0);
  }
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Counter;

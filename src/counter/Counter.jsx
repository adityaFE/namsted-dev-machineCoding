import { useState } from "react";
import usePrevious from "./usePrevious";

export default function Counter() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={handleDecrease}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={handleIncrease}>Increment</button>
    </div>
  );
}

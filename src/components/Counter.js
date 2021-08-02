import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1000000000);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

import { useState } from "react";
import Button from "./components/Button";

const Display = ({ count }) => {
  return <p>Counter: {count}</p>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const plusOneEvent = () => {
    setCount(count + 1);
  };

  const resetToZeroEvent = () => {
    setCount(0);
  };

  const minusOneEvent = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Display count={count} />
      <Button label="plus" onClick={plusOneEvent} />
      <Button label="minus" onClick={minusOneEvent} />
      <Button label="reset" onClick={resetToZeroEvent} />
    </>
  );
};

export default Counter;

import { useState } from "react";
import Button from './components/Button'
import History from "./components/History";

const ArrayState = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setAllClick] = useState([]);

  const clickLeft = () => {
    setLeft(left + 1);
    setAllClick(allClick.concat("L "));
  };

  const clickRight = () => {
    setRight(right + 1);
    setAllClick(allClick.concat("R "));
  };

  const reset = () => {
    setRight(0);
    setLeft(0)
    setAllClick([]);
  };

  return (
    <>
      <Button label="click left" onClick={clickLeft} />
      <Button label="click right" onClick={clickRight} />
      <p>left count: {left}</p>
      <p>right count: {right}</p>
      <History allClick={allClick}/>
      <Button label="reset" onClick={reset} />

    </>
  );
};

export default ArrayState
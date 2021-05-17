import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./store/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const increment = () => {
    dispatch({ type: "PLUS" });
  };

  const decrement = () => {
    dispatch({ type: "MINUS" });
  };

  return (
    <div style={{ textAlign: "center" }}>
      Counter: {counter}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;

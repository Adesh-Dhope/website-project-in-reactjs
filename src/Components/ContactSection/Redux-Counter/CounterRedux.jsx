import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterRedux = () => {
  const count = useSelector((state) => state.count); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });
  const handleReset = () => dispatch({ type: "RESET" });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Redux Library : Counter functionality example</h1>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>
      <button onClick={handleDecrement} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>
      <button onClick={handleReset} style={{ margin: "5px", padding: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default CounterRedux;

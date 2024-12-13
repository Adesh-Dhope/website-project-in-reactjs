import React, { useReducer } from "react";


// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
        return Set;
  }
};


const initialState = { count: 0 };


const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useReducer Hook Example : Increment, Decrement & Reset Functionality</h1>
      <h1>Counter: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "increment" })} style={{padding: "10px",margin: "5px", fontSize: "16px"}}
        >
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })} style={{padding: "10px", margin: "5px",fontSize: "16px", }}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}style={{ padding: "10px", margin: "5px", fontSize: "16px",}}
        >
          Reset
        </button>
      </div>
    </div>
  );
};


export default CounterUseReducer;
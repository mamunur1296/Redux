import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>incress</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decress</button>
    </div>
  );
};

export default Counter;

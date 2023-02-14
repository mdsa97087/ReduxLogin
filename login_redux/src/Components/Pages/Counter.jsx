import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddHandleCount, ReduceCount } from "../../App/Action";

function Counter() {
  const [counter, setCounter] = useState(0);

  const count = useSelector((reduxStore) => reduxStore.AppReducer.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "grid",
        width: "500px",
        gap: "30px",
        margin: "100px auto",
      }}
    >
      <h1>By State Counter: - {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>Add By State</button>
      <button onClick={() => counter > 0 && setCounter(counter - 1)}>
        Reduce By State
      </button>


{/* `````````````````````-------------------------------------```````````--------` */}

      <h1>By Reducer Count: - {count} </h1>
      <button onClick={() => dispatch(AddHandleCount())}>Add By Reducer</button>
      <button onClick={() => count > 0 && dispatch(ReduceCount())}>
        Reduce By Reducer
      </button>
    </div>
  );
}

export default Counter;

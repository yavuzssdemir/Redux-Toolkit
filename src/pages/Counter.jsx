import React from "react";
import { Button, Stack } from "react-bootstrap";
import { decrease, increase, setCount } from "../app/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.counterReducer);
  return (
    <div>
      <h1>{state.count}</h1>
      <Stack gap={2}>
        <Button variant="danger" onClick={() => dispatch(decrease())}>
          - Decrease
        </Button>
        <Button variant="success" onClick={() => dispatch(increase())}>
          + Increase
        </Button>
        <Button variant="primary" onClick={() => dispatch(setCount(0))}>
          Reset
        </Button>
      </Stack>
    </div>
  );
};

export default Counter;

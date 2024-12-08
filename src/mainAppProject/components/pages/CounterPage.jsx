import React, { useReducer } from "react";
import Panel from "../Panel";
import produce from "immer";

const INCREMENT_AMOUNT = "increment-amout";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;

    case DECREMENT:
      state.count = state.count - 1;
      return;

    case INCREMENT_AMOUNT:
      state.valueToAdd = action.payload;
      return;

    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return;
  }
};
        
const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log("state =>", state);

  const increment = () =>
    dispatch({
      type: INCREMENT,
    });

  const decrement = () =>
    dispatch({
      type: DECREMENT,
    });

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: INCREMENT_AMOUNT,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className={"m-3"}>
      <h1 className="text-lg">
        Count is <b>{state.count}</b>
      </h1>

      <div className="flex flex-row m-4">
        <button onClick={increment} className="p-1">
          Increment
        </button>
        <button onClick={decrement} className="p-1">
          Decrement
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <button className="p-1 bg-green-600 text-black">Add it!</button>
      </form>
    </Panel>
  );
};

export default CounterPage;

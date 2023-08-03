import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <div>
      <p>Counter View</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increaseByAmount(5));
        }}
      >
        IncreaseBy5
      </button>
    </div>
  );
};

export default CounterView;

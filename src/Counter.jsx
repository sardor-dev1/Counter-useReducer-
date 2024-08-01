
import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [incrementValue, setIncrementValue] = useState(0);
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: Number(incrementValue) || 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: Number(incrementValue) || 1 });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setTextColor(color);
    dispatch({ type: "setColor", payload: color });
  };

  const handleBackgroundChange = (e) => {
    const bg = e.target.value;
    setBgColor(bg);
    dispatch({ type: "setBackground", payload: bg });
  };

  const styles = {
    color: state.color,
    backgroundColor: state.background,
    padding: "20px",
  };

  return (
    <div
      style={styles}
      className="min-h-screen flex flex-col items-center justify-center p-6"
    >
      <h1 className="text-4xl font-bold mb-6">Counter Page</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
          placeholder="Increment/Decrement value"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          value={textColor}
          onChange={handleColorChange}
          placeholder="Text color"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          value={bgColor}
          onChange={handleBackgroundChange}
          placeholder="Background color"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleIncrement}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Reset
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Count: {state.count}</h2>
      </div>
    </div>
  );
}

export default Counter;

import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * TodoInput allows users to add new todos via input and button.
 */
export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (onAdd) onAdd(value);
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="input-row" role="form" aria-label="Add todo">
      <input
        className="input-control"
        type="text"
        placeholder="Type a task and press Enter"
        aria-label="Todo text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="btn" onClick={handleSubmit} aria-label="Add todo">
        Add
      </button>
    </div>
  );
}

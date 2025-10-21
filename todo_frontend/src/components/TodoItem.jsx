import React from "react";

/**
 * PUBLIC_INTERFACE
 * TodoItem shows a single todo with toggle and delete actions.
 */
export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        aria-label={`Mark "${item.text}" as ${item.completed ? "active" : "completed"}`}
        checked={!!item.completed}
        onChange={onToggle}
      />
      <div
        className={`todo-text ${item.completed ? "completed" : ""}`}
        title={item.text}
      >
        {item.text}
      </div>
      <button
        className="delete-btn"
        aria-label={`Delete "${item.text}"`}
        onClick={onDelete}
        title="Delete task"
      >
        Delete
      </button>
    </div>
  );
}

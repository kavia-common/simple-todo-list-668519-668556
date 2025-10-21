import React from "react";
import TodoItem from "./TodoItem";

/**
 * PUBLIC_INTERFACE
 * TodoList renders a list of TodoItem components.
 */
export default function TodoList({ items, onToggle, onDelete }) {
  if (!items?.length) {
    return (
      <div className="todo-list" aria-live="polite" aria-atomic="true">
        <div className="muted" style={{ padding: "12px 4px" }}>
          No tasks yet — add something to get started.
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list" aria-live="polite" aria-atomic="true">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={() => onToggle?.(item.id)}
          onDelete={() => onDelete?.(item.id)}
        />
      ))}
    </div>
  );
}

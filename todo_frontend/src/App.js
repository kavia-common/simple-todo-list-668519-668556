import React, { useMemo, useState } from "react";
import "./index.css";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

// PUBLIC_INTERFACE
export default function App() {
  /**
   * Minimalist single-page Todo app.
   * State is in-memory only and resets on reload.
   * Theme uses Ocean Professional palette via CSS variables in index.css.
   */
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all' | 'active' | 'completed'

  // Add a new todo
  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    const trimmed = String(text || "").trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmed, completed: false },
    ]);
  };

  // Toggle completion
  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Delete a single todo
  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // Clear all completed todos
  // PUBLIC_INTERFACE
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div className="app-root">
      <header className="header">
        <div className="header-inner">
          <h1 className="title">Tasks</h1>
          <p className="subtitle">Plan. Focus. Finish.</p>
        </div>
      </header>

      <main className="container card">
        <TodoInput onAdd={addTodo} />

        <Filters
          activeFilter={filter}
          onChange={setFilter}
          remainingCount={remainingCount}
          onClearCompleted={clearCompleted}
        />

        <TodoList
          items={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>

      <footer className="footer-note">
        <span className="muted">
          In-memory demo • No data is stored between refreshes
        </span>
      </footer>
    </div>
  );
}

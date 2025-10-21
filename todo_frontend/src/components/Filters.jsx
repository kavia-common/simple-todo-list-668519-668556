import React from "react";

/**
 * PUBLIC_INTERFACE
 * Filters renders filter buttons, remaining count, and clear completed action.
 */
export default function Filters({
  activeFilter = "all",
  onChange,
  remainingCount = 0,
  onClearCompleted,
}) {
  const Button = ({ id, label }) => (
    <button
      className={`filter-btn ${activeFilter === id ? "active" : ""}`}
      onClick={() => onChange?.(id)}
      aria-pressed={activeFilter === id}
      aria-label={`${label} filter`}
    >
      {label}
    </button>
  );

  return (
    <div className="filters-row" role="region" aria-label="Filters and actions">
      <div className="filters" role="toolbar" aria-label="Filter todos">
        <Button id="all" label="All" />
        <Button id="active" label="Active" />
        <Button id="completed" label="Completed" />
      </div>

      <div className="count" aria-live="polite">
        {remainingCount} item{remainingCount === 1 ? "" : "s"} left
      </div>

      <button
        className="clear-btn"
        onClick={onClearCompleted}
        aria-label="Clear completed"
        title="Clear completed"
      >
        Clear completed
      </button>
    </div>
  );
}

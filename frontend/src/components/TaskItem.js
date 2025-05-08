import React from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => (
  <div className="task-item">
    <div>
      <h4 className="task-title">
        {task.title} ({task.priority})
      </h4>
      <p className="task-description">{task.description}</p>
    </div>
    <div className="task-actions">
      <input
        type="checkbox"
        checked={task.status === "complete"}
        onChange={() => onUpdate(task)}
        className="task-checkbox"
      />
      <button onClick={() => onDelete(task._id)} className="task-delete">
        Delete
      </button>
    </div>
  </div>
);

export default TaskItem;

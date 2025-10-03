import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ token, onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("https://task-manager-app-aslam-api.onrender.com/api/tasks", formData, {
    await axios.post("/api/tasks", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    onTaskAdded();
    setFormData({
      title: "",
      description: "",
      priority: "Low",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        className="task-input"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <select
        className="task-select"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="task-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

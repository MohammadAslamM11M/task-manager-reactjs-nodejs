import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { tasks, fetchAllTasks } = useTasks(token);

  useEffect(() => {
    if (!token) navigate("/register");
  }, [token, navigate]);

  const handleLogout = () => {
    navigate("/register");
  };

  const updateTask = async (task) => {
    await axios.patch(
      // `https://task-manager-app-aslam-api.onrender.com/api/tasks/${task._id}`,
      `/api/tasks/${task._id}`,
      {
        status: task.status === "complete" ? "incomplete" : "complete",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    fetchAllTasks();
  };

  const deleteTask = async (id) => {
    // await axios.delete(`https://task-manager-app-aslam-api.onrender.com/api/tasks/${id}`, {
    await axios.delete(`/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchAllTasks();
  };

  return (
    <div className="dashboard-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="dashboard-title">My Tasks</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <TaskForm token={token} onTaskAdded={fetchAllTasks} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default Dashboard;

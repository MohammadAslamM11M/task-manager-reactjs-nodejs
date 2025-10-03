import React, { useEffect, useState } from "react";
import axios from "axios";

const useTasks = (token) => {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    // const response = await axios.get("https://task-manager-app-aslam-api.onrender.com/api/tasks", {
    const response = await axios.get("/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(response.data);
  };

  useEffect(() => {
    if (token) fetchAllTasks();
  }, [token]);

  return { tasks, fetchAllTasks };
};

export default useTasks;

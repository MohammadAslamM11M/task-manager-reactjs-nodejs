import React, { useEffect, useState } from "react";
import axios from "axios";

const useTasks = (token) => {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks", {
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

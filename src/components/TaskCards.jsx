/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { tasksData } from "../constants";
import Search from "./Search";

function TaskCards() {
  const [tasks, setTasks] = useState(tasksData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error("Error parsing stored tasks", error);
        setTasks(tasksData); // Fallback to default tasks data
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} removeTask={removeTask} />
        ))}

        {filteredTasks.length === 0 && (
          <p className="text-orange text-xl">No matched tasks</p>
        )}
      </div>

      <TaskForm addTask={addTask} />
    </>
  );
}

export default TaskCards;

/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { tasksData } from "../constants";
import Search from "./Search";

function TaskCards() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : tasksData;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error("Error parsing stored tasks", error);
        setTasks(tasksData);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (title) => {
    const newTasks = tasks.filter((task) => task.title !== title);
    setTasks(newTasks);
  };

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (title) => {
    const updatedTasks = tasks.map((task) =>
      task.title === title ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
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
        {filteredTasks.map((task, index) => (
          <TaskCard
            key={task.title}
            task={task}
            index={index}
            moveTask={moveTask}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
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

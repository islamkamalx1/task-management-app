/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      const newTask = {
        title,
        description,
        completed: false,
      };

      addTask(newTask);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <h3 className="text-orange px-3 text-xl my-5">
        Want to add your tasks? lets go..
      </h3>
      <form
        className="flex flex-col gap-3 w-full px-3 mb-8"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          className="p-3 rounded border border-orange focus:outline-orange"
          type="text"
          placeholder="task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-3 rounded border border-orange focus:outline-orange resize-none"
          placeholder="task description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />

        <Button>add task</Button>
      </form>
    </>
  );
}

export default TaskForm;

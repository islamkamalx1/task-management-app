/* eslint-disable react/prop-types */
import { useDrag, useDrop } from "react-dnd";
import Button from "./Button";

const ItemType = "TASK";

function TaskCard({
  index,
  moveTask,
  removeTask,
  toggleTaskCompletion,
  task: { title, description, completed },
}) {
  const handleToggleCompletion = () => {
    toggleTaskCompletion(title);
  };

  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`rounded border h-50 border-yellow p-3 m-2 cursor-move ${
        completed ? "bg-green-200" : "bg-secondary"
      }`}
    >
      <h3
        className={`text-center text-lg font-semibold mb-3 ${
          completed ? "line-through" : ""
        }`}
      >
        {title}
      </h3>

      <p
        className={`py-4 ${
          completed ? "line-through text-gray-400" : "text-white"
        }`}
      >
        {description}
      </p>

      <div className="flex items-center gap-4">
        <Button onclick={() => removeTask(title)}>
          <span>Delete</span>
          <img className="w-[24px] h-[24px]" src="/delete.svg" />
        </Button>

        <Button onclick={handleToggleCompletion}>
          <span>{completed ? "Undo" : "Complete"}</span>
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;

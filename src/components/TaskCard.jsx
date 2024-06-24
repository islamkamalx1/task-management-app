/* eslint-disable react/prop-types */
import Button from "./Button";

function TaskCard({ removeTask, task: { id, title, description } }) {
  return (
    <div className="rounded border h-fit border-yellow p-3 m-2 cursor-move">
      <h3 className="text-white text-center text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="py-4 text-yellow">{description}</p>

      <div>
        <Button onclick={() => removeTask(id)}>
          <span>Delete</span>
          <img className="w-[24px] h-[24px]" src="/delete.svg" />
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;

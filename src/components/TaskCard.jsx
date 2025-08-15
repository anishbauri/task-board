import {
  FaRegListAlt,
  FaSpinner,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

export default function TaskCard({ task, moveTask, deleteTask }) {
  const getBgColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-red-100";
      case "inprogress":
        return "bg-yellow-100";
      case "done":
        return "bg-green-100";
      default:
        return "bg-gray-100";
    }
  };

  const getIcon = (status) => {
    switch (status) {
      case "todo":
        return <FaRegListAlt className="text-xl text-red-500" />;
      case "inprogress":
        return <FaSpinner className="text-xl text-yellow-500" />;
      case "done":
        return <FaCheckCircle className="text-xl text-green-500" />;
      default:
        return null;
    }
  };

  const nextStatus = {
    todo: "inprogress",
    inprogress: "done",
    done: "todo",
  };

  return (
    <div
      className={`flex items-center justify-between rounded p-4 shadow ${getBgColor(task.status)}`}
    >
      <div className="flex items-center gap-3">
        {getIcon(task.status)}
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-sm">{task.description}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => moveTask(task.id, nextStatus[task.status])}
          className="rounded bg-gray-800 px-3 py-1 text-sm text-white"
        >
          {task.status === "todo"
            ? "Move to In Progress"
            : task.status === "inprogress"
              ? "Move to Done"
              : "Move to To Do"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

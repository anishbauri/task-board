export default function TaskCard({ task, moveTask }) {
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

  const nextStatus = {
    todo: "inprogress",
    inprogress: "done",
    done: "todo",
  };

  return (
    <div className={`rounded p-4 shadow ${getBgColor(task.status)}`}>
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="mb-3 text-sm">{task.description}</p>
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
    </div>
  );
}

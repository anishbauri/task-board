import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design homepage",
      description: "Create layout and assets",
      status: "todo",
    },
    {
      id: 2,
      title: "Implement auth",
      description: "Set up JWT authentication",
      status: "inprogress",
    },
    {
      id: 3,
      title: "Set up database",
      description: "Initialize MongoDB and deploy",
      status: "done",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, status: "todo" };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold">Task Board</h1>

        {/* Filter buttons */}
        <div className="mb-4 flex gap-2">
          {["all", "todo", "inprogress", "done"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded px-4 py-1 ${
                filter === status ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {status === "all"
                ? "All"
                : status === "todo"
                  ? "To Do"
                  : status === "inprogress"
                    ? "In Progress"
                    : "Done"}
            </button>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="ml-auto rounded bg-blue-600 px-4 py-1 text-white"
          >
            + Add Task
          </button>
        </div>

        {/* Task List */}
        <TaskList tasks={filteredTasks} moveTask={moveTask} />

        {/* Modal */}
        {showModal && (
          <AddTaskModal onClose={() => setShowModal(false)} onAdd={addTask} />
        )}
      </div>
    </div>
  );
}

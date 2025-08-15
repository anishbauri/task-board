import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";

export default function App() {
  // Load tasks directly when initializing state
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 bg-gradient-to-b from-neutral-400 via-neutral-200 to-neutral-50 bg-clip-text text-center font-serif text-4xl font-extrabold tracking-wide text-transparent italic drop-shadow-lg">
          Task Board
        </h1>

        {/* Filter buttons */}
        <div className="mb-8 flex gap-2">
          {["all", "todo", "inprogress", "done"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded-lg px-4 py-1 transition-all duration-300 hover:cursor-pointer hover:shadow-xl/30 ${
                filter === status ? "bg-blue-500 text-white" : "bg-slate-300"
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
            className="ml-auto flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 px-5 py-2 font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:cursor-pointer hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 hover:shadow-xl/30"
          >
            <span className="text-xl">＋</span> Add Task
          </button>
        </div>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <p className="mt-5 text-center text-2xl text-slate-100">
            Empty Task Board.
          </p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
        )}

        {/* Modal */}
        {showModal && (
          <AddTaskModal onClose={() => setShowModal(false)} onAdd={addTask} />
        )}
      </div>
    </div>
  );
}

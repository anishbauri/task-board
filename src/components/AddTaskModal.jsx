import { useState } from "react";

export default function AddTaskModal({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-blue-200 to-sky-200 opacity-80"></div>
      <div className="z-50 w-96 rounded-lg bg-white p-6 shadow-xl/30">
        <h2 className="mb-4 text-center font-serif text-xl font-bold text-slate-800">
          Add New Task
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border p-2"
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border p-2"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-slate-700 px-3 py-1 text-slate-50 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-800 hover:shadow-lg/30"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-800 px-3 py-1 text-slate-100 transition-all duration-300 hover:cursor-pointer hover:bg-blue-600 hover:shadow-lg/30"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

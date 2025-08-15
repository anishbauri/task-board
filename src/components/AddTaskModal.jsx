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
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
      <div className="w-96 rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Add New Task</h2>
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
              className="rounded bg-gray-300 px-3 py-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-3 py-1 text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import TaskCard from "./TaskCard";

export default function TaskList({ tasks, moveTask }) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 && <p className="text-gray-500">No tasks to show.</p>}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
}

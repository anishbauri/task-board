import TaskCard from "./TaskCard";

export default function TaskList({ tasks, moveTask, deleteTask }) {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

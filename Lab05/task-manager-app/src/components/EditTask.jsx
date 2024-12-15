import { useState } from 'react';
import { useAtom } from 'jotai';
import { tasksAtom, editTaskAtom } from '../state/taskAtom';

const EditTask = () => {
  const [editTask, setEditTask] = useAtom(editTaskAtom);
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [taskName, setTaskName] = useState(editTask ? editTask.name : '');

  const handleUpdateTask = () => {
    if (!editTask) return;
    const updatedTask = { ...editTask, name: taskName };
    setTasks(
      tasks.map((task) => (task.id === editTask.id ? updatedTask : task))
    );
    setEditTask(null);
  };

  if (!editTask) return null;

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default EditTask;

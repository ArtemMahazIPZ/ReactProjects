import { useState } from 'react';
import { useAtom } from 'jotai';
import { tasksAtom } from '../state/taskAtom';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useAtom(tasksAtom);

  const handleAddTask = () => {
    if (taskName.trim() === '') return;
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;

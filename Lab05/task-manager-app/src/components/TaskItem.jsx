import { useAtom } from 'jotai';
import { tasksAtom, editTaskAtom } from '../state/taskAtom';

const TaskItem = ({ task }) => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [, setEditTask] = useAtom(editTaskAtom);

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleEdit = () => {
    setEditTask(task);
  };

  return (
    <div>
      <span>{task.name}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;

import { useAtom } from 'jotai';
import { tasksAtom } from '../state/taskAtom';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks] = useAtom(tasksAtom);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

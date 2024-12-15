import { atom } from 'jotai';

export const tasksAtom = atom([
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: false },
]);

export const editTaskAtom = atom(null);

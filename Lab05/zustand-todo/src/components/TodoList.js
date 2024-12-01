import React from 'react';
import useTodoStore from '../store/useTodoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p>No tasks added yet!</p>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </div>
    );
};

export default TodoList;

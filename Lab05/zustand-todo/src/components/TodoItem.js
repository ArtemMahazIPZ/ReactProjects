import React from 'react';
import useTodoStore from '../store/useTodoStore';

const TodoItem = ({ todo }) => {
    const { toggleTodo, deleteTodo } = useTodoStore();

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? '✔️' : '❌'} {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;


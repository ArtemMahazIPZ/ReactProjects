import React from 'react';
import useTodoStore from './store/useTodoStore';

const App = () => {
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);

    const handleAddTodo = () => {
        const title = prompt('Enter todo title:');
        if (title) addTodo(title);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <span className="todo-title">{todo.title}</span>
                        <div className="todo-actions">
                            <button
                                className="todo-btn toggle"
                                onClick={() => toggleTodo(todo.id)}
                            >
                                {todo.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button
                                className="todo-btn delete"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

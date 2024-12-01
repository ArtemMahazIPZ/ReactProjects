import React, { useState } from 'react';
import useTodoStore from '../store/useTodoStore';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAdd = () => {
        if (title.trim()) {
            addTodo(title);
            setTitle('');
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;

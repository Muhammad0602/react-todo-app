import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import TodoForm from './TodoForm';

function Todo({
  todos, completeTodo, removeTodo, updatedTodo,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const updateSubmit = (value) => {
    updatedTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={updateSubmit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className="icons">
        <FaTrashAlt
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <AiFillEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="delete-icon"
        />
      </div>
    </div>

  ));
}

export default Todo;

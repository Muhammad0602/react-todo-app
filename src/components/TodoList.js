import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updatedTodo = (todoId, newValue) => {
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>What is the plan for today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedTodo={updatedTodo}
      />
    </div>
  );
}

export default TodoList;

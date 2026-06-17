import "./todo.css";
import { useState } from "react";
import { TodoForm } from "./todoform";
import { TodoList } from "./todoList";
import { DateTime } from "./todoDate-Time";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //? to check if the input field is empty or not
    if (!content) return;

    //? to check if the data is already existing or not
    if (task.includes(inputValue)) return;

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  // todo handleDeleteTodo
  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  // todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};

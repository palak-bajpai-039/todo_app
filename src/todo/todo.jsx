import "./todo.css";
import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./todoform";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleFormSubmit = (inputValue) => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    if (task.includes(trimmedValue)) return;
    setTask((prevTask) => [...prevTask, trimmedValue]);
  };

  //todo date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatttedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formatttedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <h2 className="date-time">{dateTime}</h2>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>

                <button className="check-btn">
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
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

import "./todo.css";
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    if (task.includes(trimmedValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, trimmedValue]);
    setInputValue("");
  };

  //const handleDeleteTask = (value) => {
  // const updatedTasks = task.filter((curTask) => curTask !== value);
  //setTask(updatedTasks);
  //};

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
              placeholder="Add Task"
            />
          </div>
          <div>
            <button type="submit" className="todo-btno">
              Add Task
            </button>
          </div>
        </form>
      </section>

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>

                <button className="check-btn">
                  <MdCheck />
                </button>

                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

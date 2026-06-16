import "./todo.css";
import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

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

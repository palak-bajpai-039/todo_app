import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");\

  const handleInputChange = (value) => {
    setInputValue({id:value,content:value,checked:false});
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
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
  );
};

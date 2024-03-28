import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleList() {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleList}>Aggiugi un to-do</button>
        <ul>
          {todos.map((todo, index) => (
            <>
              <li key={index}>{todo}</li>
              <button onClick={() => removeTodo(index)}>Rimuovi la todo</button>
            </>
          ))}
        </ul>
      </>
    </>
  );
}

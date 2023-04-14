import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log(inputValue);
    setTodoList([...todoList, inputValue]); // 기존에 todoList 배열에 있는 값은 유지하며 추가로 inputValue 값을 추가함
  };
  return (
    <main>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;

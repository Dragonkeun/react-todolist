import React from "react";

function TodoItem(props) {
  console.log(props);
  return <div className="todo-item">{props.item}</div>;
}
export default TodoItem;

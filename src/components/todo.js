import React from "react";
import "./todo.css";
const Todo = (props) => {
  const { id, name, todos, onDelete } = props;
  return (
    <div className="todo">
      <h5>#{id}</h5>
      <h3>name: {name}</h3>
      <h4>todo: {todos}</h4>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default Todo;

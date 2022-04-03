import React, { useState } from 'react'
import Todo from './todo'
const Todos = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const onsubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: data.length + 1,
      name: e.target.name.value,
      todos: e.target.todos.value,
    };
    setData([...data, newData]);
    localStorage.setItem("data", JSON.stringify([...data, newData]));
    console.log([...data, newData]);
  }
  return (
    <>
      <div>
        <form onSubmit={onsubmit}>
          <input type="text" name="name" required />
          <input type="text" name="todos" required />
          <button type="submit">Add</button>
        </form>
        {data?.map((item) => (
          <Todo {...item}/>
        ))}
      </div>
    </>
  );
}

export default Todos;
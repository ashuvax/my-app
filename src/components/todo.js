import React from 'react'

const Todo = (props) => {
    const { id,name, todos } = props;
  return (
      <div>
          <h5>{id}</h5>
          <h3>{name}</h3>
            <h4>{todos}</h4>
    </div>
  )
}

export default Todo
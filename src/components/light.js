import React, { useState } from 'react'

const Light = () => {
    const [isOpen, setIsOpen] = useState(true)
    const onclick = () => setIsOpen(!isOpen);
  return (
    <div>
      door is: {isOpen ? "open" : "close"}
      <button onClick={onclick}>click my</button>
    </div>
  );
}

export default Light
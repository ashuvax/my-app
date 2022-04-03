import React, { useState } from "react";

const Form = () => {
  const [val, setVal] = useState(localStorage.getItem("name") || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        localStorage.setItem("name", val);
        console.log(e);
      }}
    >
      <input
        value={val}
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          if (!/[0-9]/.test(e.target.value)) {
            setVal(e.target.value.toUpperCase());
          }
        }}
      />
      <button type="submit">שלח</button>
    </form>
  );
};

export default Form;

import React, { useEffect, useState } from "react";
import Jok from "./jok";
import Loading from "./loadingFunc";
const JoksFunc = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [val , setVal] = useState('');

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.entries);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}>
          <input type="text" name="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>

        <input value={setVal()} onChange={(event) => console.log(val)} />
        {items.map((item) => (
          <Jok {...item} />
        ))}
      </div>
    );
  }
};
export default JoksFunc;

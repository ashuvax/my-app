import React from "react";

const Welcome = (props) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const isMarid = props.marid;
  return (
    <>
      <div>
        <h1>
          Hello, {props.name} and {props.partner.name} are married?
        </h1>
        {isMarid ? (
          <h2>yes, they are married</h2>
        ) : (
          <h2>no, they are not married</h2>
        )}
        <p>name id is : {props.id}</p>
        <p>firendName id is: {props.partner.id}</p>
        {array.map((val) => (
          <div key={val.id}>{val}</div>
        ))}
      </div>
    </>
  );
};
// Welcome.prototype = {
//   name: React.PropTypes.string.isRequired,
//   id: React.PropTypes.number.isRequired,
//   age: React.PropTypes.number.isRequired,
//   partner: React.PropTypes.object.isRequired,
//   marid: React.PropTypes.bool.isRequired
// }
export default Welcome;

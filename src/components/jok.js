import React from "react";
import "./jok.css";
const jok = (props) => {
  const { API, Link, Description} = props;
  return (
    <div className="jok">
      api: {API}
      <br />
      Link: {Link}
      <br />
      Description: {Description}
    </div>
  );
};

export default jok;

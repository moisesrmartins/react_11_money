import React from "react";
import rest from "../use/rest";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Moves = () => {
  const data = useGet("moves");

  if (data.loading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="container">
      <h1>Moves</h1>
      <h2>Moviment</h2>
    </div>
  );
};

export default Moves;

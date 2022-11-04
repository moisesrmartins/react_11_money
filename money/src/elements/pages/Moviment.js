import React from "react";
import rest from "../use/rest";
import { useParams } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Moviment = ({ match }) => {
  let { id } = useParams(match);
  const data = useGet("moviment", id);
  return (
    <div className="container">
      <h1>Moviment</h1>
      <h2>Money</h2>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(id)}</pre>
    </div>
  );
};

export default Moviment;

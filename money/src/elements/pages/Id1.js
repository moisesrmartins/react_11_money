import React from "react";
import rest from "../use/rest";
import { Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Id1 = () => {
  const data = useGet("id1");

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <div className="container">
        <h1>Bank Moviment</h1>
        <h2>
          <Link to={"/moves"} style={{ textDecoration: "none" }}>
            Moves
          </Link>
        </h2>
      </div>
    );
  }

  return null;
};

export default Id1;

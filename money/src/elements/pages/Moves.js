import React from "react";
import rest from "../use/rest";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Moves = () => {
  const data = useGet("moves");

  if (data.loading) {
    return <span>Loading...</span>;
  }
};

export default Moves;

import React from "react";
import rest from "../use/rest";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Id2 = () => {
  const data = useGet("id2");

  if (data.loading) {
    return <span>Loading...</span>;
  }
};

export default Id2;

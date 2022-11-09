import React from "react";
import rest from "../use/rest";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Id1 = () => {
  const data = useGet("id1");

  if (data.loading) {
    return <span>Loading...</span>;
  }
};

export default Id1;
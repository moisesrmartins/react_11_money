import React from "react";
import Year from "./home/Year";
import AddYear from "./home/AddYear";

const Home = () => {
  return (
    <div className="container">
      <AddYear />
      <Year />
    </div>
  );
};

export default Home;

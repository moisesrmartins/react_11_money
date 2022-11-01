import React from "react";
import Header from "./elements/Header";
import Year from "./Year";
import AddYear from "./AddYear";

function Money() {
  return (
    <div className="Money">
      <Header />
      <div className="container">
        <AddYear />

        <Year />
      </div>
    </div>
  );
}
export default Money;

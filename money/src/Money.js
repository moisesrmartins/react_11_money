import React from "react";
import useGet from "./useGet";
import usePost from "./usePost";
import useRemove from "./useRemove";

const url = "https://money-7d9fd-default-rtdb.firebaseio.com/delete.json";

function Money() {
  const data = useGet(url);
  const data2 = useGet("https://httpbin.org/ip");
  const [postData, post] = usePost(url);
  const [removeData, remove] = useRemove(url);

  const saveNew = () => {
    post({ chave: "value", key: "value1", valor: 10 });
  };

  const deleteNew = () => {
    remove("https://money-7d9fd-default-rtdb.firebaseio.com/delete/.json");
  };

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Money">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand">Money</h1>
        </div>
      </nav>

      {JSON.stringify(data)}
      <pre>{JSON.stringify(data2)}</pre>
      <button onClick={saveNew}>Save</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={deleteNew}>Delete</button>
      <pre>{JSON.stringify(removeData)}</pre>
    </div>
  );
}
export default Money;

import React from "react";
import rest from "../use/rest";
import { useParams } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Moviment = ({ match }) => {
  let { id } = useParams(match);
  const data = useGet("moviment", id);

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <div className="container">
        <h1>Moviment</h1>
        <h2>Money</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Moviment</th>
              <th>Wage One</th>
              <th>Wage Two</th>
              <th>Wage Three</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data.data).map((moviment) => {
              return (
                <tr key={moviment}>
                  <td to={`/moviment/${moviment}`}>{moviment}</td>
                  <td>{data.data[moviment].wage_one}</td>
                  <td>{data.data[moviment].wage_two}</td>
                  <td>{data.data[moviment].wage_three}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <pre>{JSON.stringify(data)}</pre>
        <pre>{JSON.stringify(data.id)}</pre>
        <pre>{JSON.stringify(id)}</pre>
      </div>
    );
  }
  return null;
};

export default Moviment;

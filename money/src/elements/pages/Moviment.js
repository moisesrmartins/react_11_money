import React from "react";
import { useState } from "react";
import rest from "../use/rest";
import { useParams, Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet, usePost } = rest(baseURL);

const Moviment = ({ match }) => {
  let { id } = useParams(match);

  const data = useGet("moviment", id);
  const [postData, save] = usePost("moviment");

  const [year, setYear] = useState(0.0);
  const [moviment, setMoviment] = useState("");
  const [value, setValue] = useState(0.0);

  const onChangeYear = (evt) => {
    setYear(parseFloat(evt.target.value));
    console.log(parseFloat(evt.target.value));
  };
  const onChangeMoviment = (evt) => {
    setMoviment(evt.target.value);
    console.log(evt.target.value);
  };
  const onChangeValue = (evt) => {
    setValue(parseFloat(evt.target.value));
    console.log(parseFloat(evt.target.value));
  };

  const saveCode = async () => {
    await save({
      year,
      moviment,
      value,
    });
  };

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <div className="container">
        <h1>Moviment</h1>

        <h2>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Money
          </Link>
        </h2>

        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Year</th>
              <th>
                <Link to={"/moves"} style={{ textDecoration: "none" }}>
                  Moviment
                </Link>
              </th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(data.data).map((code) => {
              return (
                <tr key={code}>
                  <td to={`/moviment/${code}`}>{code}</td>

                  <td>{data.data[code].year}</td>
                  <td>{data.data[code].moviment}</td>
                  <td>{data.data[code].value}</td>
                </tr>
              );
            })}

            <tr>
              <td>
                <input type="text" value={year} onChange={onChangeYear} />
              </td>

              <td>
                <input
                  typre="text"
                  value={moviment}
                  onChange={onChangeMoviment}
                />
              </td>

              <td>
                <input type="text" value={value} onChange={onChangeValue} />
                <button onClick={saveCode}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default Moviment;

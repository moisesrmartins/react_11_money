import { useEffect, useReducer } from "react";
import axios from "axios";

const INITIAL_STATE = {
  loading: false,
  data: {},
};

const reducer = (state, action) => {
  console.log("state", state, "action", action);
  if (action.type === "REQUEST") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "SUCCESS") {
    return { ...state, loading: false, data: action.data };
  }
  return state;
};

const rest = (baseURL) => {
  const useGet = (resource) => {
    const [data, dispatch] = useReducer(reducer, { INITIAL_STATE });

    useEffect(() => {
      dispatch({ type: "REQUEST" });
      axios.get(baseURL + resource + ".json").then((res) => {
        dispatch({ type: "SUCCESS", data: res.data });
      });
    }, [resource]);

    return data;
  };

  const usePost = (resource) => {
    const [data, dispatch] = useReducer(reducer, { INITIAL_STATE });

    const post = async (data) => {
      dispatch({ type: "REQUEST" });
      const res = await axios.post(baseURL + resource + ".json", data);
      dispatch({ type: "SUCCESS", data: res.data });
      console.log(res.data);
    };

    return [data, post];
  };

  const useRemove = () => {
    const [data, dispatch] = useReducer(reducer, { INITIAL_STATE });

    const remove = (resource) => {
      dispatch({ type: "REQUEST" });
      axios.delete(baseURL + resource + ".json").then(() => {
        dispatch({ type: "SUCCESS" });
      });
    };

    return [data, remove];
  };

  return {
    useGet,
    usePost,
    useRemove,
  };
};

export default rest;

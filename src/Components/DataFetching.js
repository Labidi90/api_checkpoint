import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const DataFetching = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="data-style">
      {users.map((user) => (
        <Card user={user} />
      ))}
    </div>
  );
};

export default DataFetching;
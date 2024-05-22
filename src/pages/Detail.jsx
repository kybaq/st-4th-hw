import React from "react";
import { Link, useLocation } from "react-router-dom";

function Detail({ path }) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <h1>Detail</h1>
      <span>{path}</span>
      <Link to="/">Goes to Home</Link>
    </div>
  );
}

export default Detail;

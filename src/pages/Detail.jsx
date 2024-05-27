import React from "react";
import { Link, useParams } from "react-router-dom";

function Detail({ path }) {
  const params = useParams();
  console.log(params);
  console.log(`params.id: ${params.id}`);

  return (
    <div>
      <h1>Detail</h1>
      <span>{path}</span>
      <Link to="/">Goes to Home</Link>
    </div>
  );
}

export default Detail;

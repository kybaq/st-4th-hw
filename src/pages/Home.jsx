import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Sweet Home</h1>
      <Link to="/detail">Goes to Detail</Link>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="center-Container">
      <p>Error Occured, Go Home Page</p>
      <Link to="/posts-list">Go Home</Link>
    </div>
  );
}

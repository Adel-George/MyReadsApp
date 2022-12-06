import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="list-books-title">
      <Link className="close-search" to="/" style={{"backgroundColor":"#2e7c31"}}>
        Close
      </Link>
      <h1>Not Found</h1>
    </div>
  );
}

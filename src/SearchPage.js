import React from "react";
import { Link } from "react-router-dom";
import BooksSearch from './BooksSearch';


export default function SearchPage(props) {
  const {searchBooks,updateBooks,bookSearch,clear}=props
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={clear}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" onChange={(e)=>searchBooks(e.target.value.toLowerCase())} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BooksSearch updateBooks={updateBooks} bookSearch={bookSearch}/>
          </ol>
        </div>
      </div>
    </>
  );
}

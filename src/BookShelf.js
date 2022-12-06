import React from "react";
import { Link } from "react-router-dom";
import Books from "./Books";

export default function Bookshelf(props) {
  const { books,updateBooks } = props;
  const bookshelfTitle = ["Currently Reading", "Want to Read", "Read"];

  return (
    <>
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                {bookshelfTitle.map((e) => (
               <div className="bookshelf" key={e}>
                   <h2 className="bookshelf-title">{e}</h2>
                  <Books title={e} books={books} updateBooks={updateBooks}/>
                  </div>
                ))}
            </div>
          </div>
          <div className="open-search">
            <Link to="search">Add a book</Link>
          </div>
        </div>
      </div>
    </>
  );
}

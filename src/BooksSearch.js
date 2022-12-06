import React from "react";

export default function BooksSearch(props) {
  const { updateBooks, bookSearch } = props;
  return (
    <>
      {bookSearch
        ? bookSearch.map((e) => (
            <li key={e.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${e?.imageLinks?.thumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select
                      defaultValue={e.shelf?e.shelf:"none"}
                      onChange={(shelf) => updateBooks(e,shelf.target.value,false)}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{e.title}</div>
                {e.authors?e.authors.map((e)=>
                <div className="book-authors" key={e}>
                    {e}
                  </div>):""}
              </div>
            </li>
        ))
        : ""}
    </>
  );
}

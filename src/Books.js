import React from "react";

export default function Books(props) {
  const {title,books,updateBooks} = props;
  return (
    <>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((e) =>(
           e.shelf.toLowerCase()===title.toLowerCase().replace(/\s/g,"")&&/* to filter Books use name of list title  */
            <li key={e.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${e.imageLinks.thumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select defaultValue={e.shelf} onChange={(shelf)=>updateBooks(e,shelf.target.value,true)}>
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
                {e.authors.map((e) => (
                  <div className="book-authors" key={e}>
                    {e}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

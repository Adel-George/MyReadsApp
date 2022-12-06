import React from 'react'
import { Route, Routes } from 'react-router'
import Bookshelf from './BookShelf'
import SearchPage from './SearchPage'
import "./App.css";
import { useState, useEffect } from "react";
import { getAll, search, update } from "./BooksAPI";
import NotFound from './NotFound';

export default function App() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState([]);

/* update Books and ui  */
  async function updateBooks(book,shelf,chickBook){
    await update(book,shelf);
      /* update Books  */
   if(chickBook){
    const updateBook=books.map((e)=>{
      if(e.id===book.id){
        e.shelf=shelf
      }
    return e;
    })
    setBooks(updateBook)
   }
    /* search Books  */
   else{
    const bookNew={...book,"shelf":shelf}
    const updateBook=[...books];
    updateBook.push(bookNew)
    setBooks(updateBook)
   }
   }

/* search  page */
   async function searchBooks(e){
    if(e!==""){
      let response= await search(e);
      if(!response.error){
        const searchBook=response.map((e)=>{
           const updateBook=books.filter((i)=>i.id===e.id);
           if(updateBook.length){
            e=updateBook[0];
           }
        return e;
        })
        setBookSearch(searchBook)
      }
      else{
        clear();
      }
    }
    else{
      clear();
    }
   }


   /* clear search Book */
   function clear(){
    setBookSearch([])
   }

/* get Books page use useEffect */
   useEffect(() => {
     async function getBooks() {
       const response = await getAll();
       setBooks(response);
     }
     getBooks();
   }, []);


/* Route */
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path='/' element={<Bookshelf books={books} updateBooks={updateBooks}/>}/>
      <Route path='search' element={<SearchPage searchBooks={searchBooks} updateBooks={updateBooks} bookSearch={bookSearch} clear={clear}/>}/>
    </Routes>
  )
}

import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
    .then(data=>setBooks(data))
  },[])
  return (
    <div>
      <h2 className="text-4xl text-center font-bold"> Books</h2>
      <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
         {
        books.map(book=><Book book={book} key={book.bookId}></Book>)
     }
     </div>
    </div>
  );
};

export default Books;
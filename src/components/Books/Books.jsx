import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks]=useState('')
    useEffect(()=>{
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h2>Books{books.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;
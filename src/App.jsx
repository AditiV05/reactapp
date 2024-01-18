import React, { useEffect, useState } from "react";
import axios from "axios";

const BookDetails = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        if (error.response && error.response.status === 404) {
          console.log("404 Not Found: Display a specific message here");
        }
      });
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <p>{book.description}</p>
          <p>Authors: {book.authors.join(", ")}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BookDetails;

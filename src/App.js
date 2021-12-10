import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Alice: [
    { name: "Alice's Adventures in Wonderland", rating: "3/5" },
    { name: "You Don't Know about this book", rating: "3/5" }
  ],

  farry: [
    {
      name: "The Lion, the Witch, and the Wardrobe",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Zero to One by Peter Thiel.",
      rating: "3/5"
    },
    {
      name: "Shoe Dog by Phil Knight.",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📚📚Goodbooks📚📚 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        😄😄 Checkout my favorite books😄😄{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "2rem",
                border: "2px solid #D1D5DB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.4rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

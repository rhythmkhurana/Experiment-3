import React, { useState } from "react";

function LibraryManagement() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add Book
  const addBook = () => {
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove Book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Filtered Books (Search)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Styles
  const container = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #eef2f7, #f8fafc)",
    minHeight: "100vh"
  };

  const card = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  };

  const input = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "10px",
    marginBottom: "10px"
  };

  const button = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={container}>
      <h1 style={{ textAlign: "center" }}>Library Management System</h1>

      {/* Search & Add Section */}
      <div style={card}>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...input, width: "100%" }}
        />

        <div style={{ marginTop: "15px" }}>
          <input
            type="text"
            placeholder="Book Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={input}
          />

          <input
            type="text"
            placeholder="Author"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            style={input}
          />

          <button
            onClick={addBook}
            style={{ ...button, background: "#2563eb", color: "white" }}
          >
            Add Book
          </button>
        </div>
      </div>

      {/* Book List */}
      {filteredBooks.map((book) => (
        <div key={book.id} style={card}>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <button
            onClick={() => removeBook(book.id)}
            style={{ ...button, background: "#dc2626", color: "white" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default LibraryManagement;

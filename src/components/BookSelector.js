import { useState } from "react";
import useStats from "../hooks/useStats";
import Stats from "./Stats";

const BookSelector = () => {
  const { stats: books, error, loading } = useStats(
    "https://lybrarie-end.herokuapp.com/api/books"
  );
  const [selctedBook, setSelectedBook] = useState();

  if (loading) return <h1>loading ...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <>
      <div className="form-container">
        <h2>Currently showing for : </h2>
        <select
          value={`${selctedBook}`}
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          {books.books.map((book) => (
            <option value={`${book._id}`} key={`${book._id}`}>
              {book.title}{book.isbn}
            </option>
          ))}
        </select>
      </div>
      <Stats
        url={`${selctedBook}`}
      ></Stats>
    </>
  );
};

export default BookSelector;
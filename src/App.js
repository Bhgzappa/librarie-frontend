import "./App.css";
import BookSelector from "./components/BookSelector";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1>TOTAL NUMBER OF BOOKS</h1>
        <Stats url="https://lybrarie-end.herokuapp.com/api/books" />
        <BookSelector />
      </div>
    </>
  );
}

export default App;

import Books from './components/Books'
import { useState, useEffect } from 'react';
import Quiz from './components/Quiz/Quiz';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const tasksFromServer = await fetchBooks();
      setBooks(tasksFromServer);
    }
    getBooks();
  }, [])

  // Fetch Books
  const fetchBooks = async () => {
    const res = await fetch('http://localhost:5000/books')
    const data = await res.json();
    return data;
  }

  // // Fetch Book
  // const fetchBook = async (id) => {
  //   const res = await fetch(`http://localhost:5000/books/${id}`)
  //   const data = await res.json();
  //   return data;
  // }
  
  return (
    <div className="App">
      <Books books={books} />
      <Quiz />
    </div>
  );
}

export default App;

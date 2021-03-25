import Book from './Book'

const Books = ({books}) => {
    return (
        <div>
            {books.map((book, index) => (<
            Book
            key={index}
            book={book}
            />))}
        </div>
    )
}

export default Books;

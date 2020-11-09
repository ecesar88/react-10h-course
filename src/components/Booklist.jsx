import React from "react";
import Book from "./Book";

const Booklist = ({ books }) => {
	return (
		<div className="book-container">
			{books.map((book) => {
				return (
					<Book
						cover={book.cover}
						title={book.title}
						author={book.author}
						price={book.price}
					/>
				);
			})}
		</div>
	);
};

export default Booklist;

import React, { useState } from "react";
import Book from "./Book";
import Loader from "./Loader"

const Booklist = () => {

	const [books, setBooks] = useState([]);

	useState(() => {
		// chamada a api
		async function getBooksFromApi() {
			setTimeout(() => setBooks([
				{
					cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
					title: "JavaScript the definitive guide",
					author: "David Flanagan",
					price: "12.25",
				},
				{
					cover: "https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg",
					title: "Humans",
					author: "Bradon Staton",
					price: "17.50",
				},
				{
					cover: "https://images-na.ssl-images-amazon.com/images/I/91gGvLMWwhL._AC_UL200_SR200,200_.jpg",
					title: "A Wealth of Pigeons: A Cartoon Collection",
					author: "Steve Martin",
					price: "24.99",
				},
				{
					cover: "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
					title: "If Animals Kissed Good Night",
					author: "Ann Whitford Paul",
					price: "4.79",
				},
			]), 5000)
		}
		getBooksFromApi()
	}, [])

	return (
		<div className="book-container">
			{
				!!books.length ? 
				books.map((book) => {
					return (
						<Book
							cover={book.cover}
							title={book.title}
							author={book.author}
							price={book.price}
						/>
					);
				}) : <Loader /> 
			}
		</div>
	);
};

export default Booklist;

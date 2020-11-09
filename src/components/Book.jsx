import React, { useState } from "react";

const Book = () => {
	const [books, setBooks] = useState([]);

	setBooks(
		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		},

		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		},

		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		},

		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		},

		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		},

		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		},

		{
			cover: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg",
			title: "JavaScript the definitive guide",
			author: "David Flanagan",
			price: "12.25",
		}
	);

	console.log(books);

	return (
		<div className="book">
			<img src={books.cover} alt="Book cover" />
			<h2>{books.title}</h2>
			<h4>{books.author}</h4>
			<p>$ {books.price}</p>
		</div>
	);
};

export default Book;

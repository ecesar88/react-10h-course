import React, { useState } from "react";
import Booklist from "./Booklist";

const Book = (props) => {

	return (
		<div className="book">
			<img src={props.cover} alt="Book cover" />
			<h2>{props.title}</h2>
			<h4>{props.author}</h4>
			<p>$ {props.price}</p>
		</div>
	);
};

export default Book;

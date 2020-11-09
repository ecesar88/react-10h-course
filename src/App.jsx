import React from "react";
import "./App.css";
import Book from "./components/Book";
import Booklist from "./components/Booklist";

function App({ books }) {
	return (
		<>
			<Booklist book={books} />;
		</>
	);
}

export default App;

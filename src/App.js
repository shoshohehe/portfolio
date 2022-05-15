import "./style_sheets/App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import React from "react";

function App() {
	return (
		<React.Fragment>
			<Header />
			<About />
			<Contact/>
		</React.Fragment>
	);
}

export default App;

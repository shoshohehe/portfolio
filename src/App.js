import "./style_sheets/App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Certificate } from "./components/Certificate";
import { Contact } from "./components/Contact";
import React from "react";

function App() {
	return (
		<React.Fragment>
			<Header />
			<About />
			<Certificate />
			<Contact />
		</React.Fragment>
	);
}

export default App;

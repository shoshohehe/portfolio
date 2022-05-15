import "./style_sheets/App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import React from "react";

function App() {
	return (
		<React.Fragment>
			<Header />
			<About />
		</React.Fragment>
	);
}

export default App;

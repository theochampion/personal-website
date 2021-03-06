import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage.js";
import EducationPage from "./pages/EducationPage";
import WorkPage from "./pages/WorkPage.js";
import ProjectPage from "./pages/ProjectPage.js";
import ContactPage from "./pages/ContactPage.js";
// components
import NavBar from "./components/NavBar";

const GlobalStyle = createGlobalStyle`
  body {
		height: 100%;
		background-color: ${({ theme }) => theme.primaryBackground}
		margin: 0;
		padding: 5vh 5vw;
		max-width: 1200px;
		margin: auto;
  }
`;

const theme = {
	primaryRed: "#e1483d",
	primaryBackground: "#FEFDFC",
	tablet: "768px"
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalStyle />
				<NavBar />
				<Route path="/" exact component={HomePage} />
				<Route path="/education" component={EducationPage} />
				<Route path="/work" component={WorkPage} />
				<Route path="/projects" component={ProjectPage} />
				<Route path="/contact" component={ContactPage} />
			</Router>
		</ThemeProvider>
	);
}

export default App;

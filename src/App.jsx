import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from './style/GlobalStyles';
import { theme } from './style/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<h1>Welcome to CRA React Starter kit</h1>
				<h2>Includes</h2>
				<ul>
					<li>Eslint + Airbnb + Prettier</li>
					<li>Styled components</li>
					<li>React Router 6</li>
					<li>React Hot Toaster</li>
					<li>React Query + Axios</li>
				</ul>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</div>
			<MyGlobalStyle />
			<Toaster />
		</ThemeProvider>
	);
}

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

export default App;

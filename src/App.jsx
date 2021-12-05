import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from './style/GlobalStyles';
import { theme } from './style/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Container>
					<h1>Welcome to CRA React Starter kit</h1>
					<h2>Includes</h2>
					<ul>
						<li>React bootstrap</li>
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
				</Container>
			</div>
			<MyGlobalStyle />
			<Toaster />
		</ThemeProvider>
	);
}

const Home = () => (
	<Row className="mx-0">
		<Button as={Col} variant="primary">
			Button #1
		</Button>
		<Button as={Col} variant="secondary" className="mx-2">
			Button #2
		</Button>
		<Button as={Col} variant="success">
			Button #3
		</Button>
	</Row>
);
const About = () => <h2>About</h2>;

export default App;

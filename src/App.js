import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

const App = () => {
	return (
		<Layout>
			<Hero />
			<Main />
			<Experience />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default App;

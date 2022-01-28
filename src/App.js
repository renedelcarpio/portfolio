import About from './components/Pages/About/About';
import Layout from './components/Pages/Layout/Layout';
import Projects from './components/Pages/Projects/Projects';

const App = () => {
	return (
		<Layout>
			<About />
			<Projects />
		</Layout>
	);
};

export default App;

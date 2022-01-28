import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Contact />
		</>
	);
};

export default Layout;

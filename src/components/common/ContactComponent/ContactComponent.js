import './ContactComponent.scss';

const ContactComponent = ({ logo, url }) => {
	return (
		<div>
			<i className={logo}></i>
			<p>{url}</p>
		</div>
	);
};

export default ContactComponent;

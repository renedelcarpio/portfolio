import './ContactComponent.scss';

const ContactComponent = ({ logo, url }) => {
	return (
		<div className='contact__items'>
			<div className='contact__logo-container'>
				<i className={`${logo} contact__logo`}></i>
			</div>
			<a className='contact__url' href={url}>
				{url}
			</a>
		</div>
	);
};

export default ContactComponent;

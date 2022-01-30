import './Button.scss';

const Button = ({ children }) => {
	return (
		<div className='btn'>
			<button>{children}</button>;
		</div>
	);
};

export default Button;

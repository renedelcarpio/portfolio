import './Contact.scss';

import ContactComponent from '../../common/ContactComponent/ContactComponent';
import { myData } from '../../../assets/data/myData';

const Contact = () => {
	return (
		<div id='contact' className='contact'>
			<div className='contact__title'>
				<h4 className='about__discover'>Lets Connect</h4>
				<h1 className='about__title'>Contact me</h1>
				<hr size='2px' width='7%' color='#f45659' />
			</div>
			<div>
				{myData.map(({ logo, url }) => {
					return <ContactComponent logo={logo} url={url} />;
				})}
			</div>
		</div>
	);
};

export default Contact;

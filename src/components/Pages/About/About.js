import './About.scss';

import Button from '../../common/Button/Button';
import Photo from '../../../assets/images/photo2.jpeg';
import cv from '../../../assets/images/ReneDelCarpioCV.pdf';
import { saveAs } from 'file-saver';

const About = () => {
	const handleClick = () => {
		saveAs(
			'https://drive.google.com/drive/folders/12m5-82K9KpCPJgToMb6KH_oVIXLwkBSN?usp=sharing',
			'ReneDelCarpioCV.pdf'
		);
	};
	return (
		<div id='about' className='about'>
			<img className='about__image' src={Photo} alt='' />
			<div className='about__info'>
				<h4 className='about__discover'>Discover</h4>
				<h1 className='about__title'>About me</h1>
				<hr size='2px' width='7%' color='#f45659' />
				<p className='about__paragraph'>
					Hi, I’m Rene, I’m a software developer with big passion for
					motorcycles and tech. I love to develop high level responsive web
					applications. I’m quietly confident, naturally curious and I have a
					great determination to overcome any obstacle. I’m always learning and
					I continue challenging me to build the best work possible. I’m seeking
					out opportunities to collaborate with companies or agencies where egos
					are out of the equation. If that sounds good to you don’t hesitate to
					contact me.
				</p>
				<div className='about__button'>
					<Button onClick={handleClick}>Resume</Button>
				</div>
			</div>
		</div>
	);
};

export default About;

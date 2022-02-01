import './About.scss';

import Button from '../../common/Button/Button';
import Photo from '../../../assets/images/photo2.jpeg';

const About = () => {
	return (
		<div id='about' className='about'>
			<img className='about__image' src={Photo} alt='' />
			<div className='about__info'>
				<h4 className='about__discover'>Discover</h4>
				<h1 className='about__title'>About me</h1>
				<hr size='2px' width='7%' color='#f45659' />
				<p className='about__paragraph'>
					Hi, I'm Rene, a frontend developer with a great passion for
					motorcycles and technology. I like to challenge myself so I am
					constantly learning. I firmly believe that perseverance is the way to
					success and that is why I never give up. I really enjoy seeing the
					designs come true on the screen with a few lines of code, my favorite
					language is JavaScript with the React.js library. Feel free to contact
					me if you think I can add value to you or your team or you just think
					we could be friends.
				</p>
				<div className='about__button'>
					<Button>Resume</Button>
				</div>
			</div>
		</div>
	);
};

export default About;

import './Main.scss';

import Bike from '../../../assets/images/bike1.jpg';
import Navbar from '../../Navbar/Navbar';
import Photo1 from '../../../assets/images/photo1.png';

const Main = () => {
	return (
		<div className='main'>
			<img className='main__image' src={Bike} alt='bike' />
			<Navbar className='main__navbar' />
			<div className='main__profile--info'>
				<img className='main__profile--photo' src={Photo1} alt='profile' />
				<h1 className='main__profile--title'>Rene Del Carpio</h1>
				<h4 className='main__profile--sub-title'>
					A Creative Frontend Developer
				</h4>
			</div>
		</div>
	);
};

export default Main;

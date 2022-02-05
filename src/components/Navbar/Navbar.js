import './Navbar.scss';

import { useState } from 'react';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<div className='navbar'>
			<h1 className='navbar__name'>Rene Del Carpio</h1>

			<ul
				className={isMobile ? 'navbar__list--mobile' : 'navbar__list'}
				onClick={() => setIsMobile(false)}
			>
				<li className='navbar__item'>
					<a className='navbar__link' href='#home'>
						Home
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='#about'>
						About
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='#skills'>
						Skills
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='#projects'>
						Projects
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='#contact'>
						Contact
					</a>
				</li>
			</ul>
			<button
				className='navbar__mobile--icon'
				onClick={() => setIsMobile(!isMobile)}
			>
				{isMobile ? (
					<i className='fas fa-times'></i>
				) : (
					<i className='fas fa-bars'></i>
				)}
			</button>
		</div>
	);
};

export default Navbar;

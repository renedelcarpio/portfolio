import './Navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<h2 className='navbar__name'>Rene Del Carpio</h2>
			<i className='fas fa-ellipsis-h'></i>
			<ul className='navbar__list'>
				<i className='fas fa-times'></i>
				<li>
					<a className='navbar__item' href='#home'>
						Home
					</a>
				</li>
				<li>
					<a className='navbar__item' href='#about'>
						About
					</a>
				</li>
				<li>
					<a className='navbar__item' href='#skills'>
						Skills
					</a>
				</li>
				<li>
					<a className='navbar__item' href='#pages'>
						Pages
					</a>
				</li>
				<li>
					<a className='navbar__item' href='#contact'>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

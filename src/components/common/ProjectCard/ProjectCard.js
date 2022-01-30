import './ProjectCard.scss';

const ProjectCard = ({ name, url, description, desktop, mobile, index }) => {
	return (
		<div className='project' key={`${index}${name}`}>
			<div className='project__images'>
				<img className='project__imageD' src={desktop} alt='desktop' />
				<img className='project__imageM' src={mobile} alt='mobile' />
			</div>
			<div className='project__info'>
				<h2 className='project__info-item project__title'>{name}</h2>
				<p className='project__info-item'>{description}</p>
				<a className='project__info-item' href={url}>
					{url}
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;

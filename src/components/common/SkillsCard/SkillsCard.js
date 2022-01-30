import './SkillsCard.scss';

const SkillsCard = ({ name, icon, description }) => {
	return (
		<div className='skillsCard'>
			<i className={`${icon} skillsCard__item`}></i>
			<h3 className='skillsCard__title'>{name}</h3>
			<p className='skillsCard__description'>{description}</p>
		</div>
	);
};

export default SkillsCard;

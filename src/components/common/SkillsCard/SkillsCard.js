import './SkillsCard.scss';

const SkillsCard = ({ name, icon }) => {
	return (
		<div className='skillsCard'>
			<i className={`${icon} skillsCard__item`}></i>
			<h3 className='skillsCard__title'>{name}</h3>
		</div>
	);
};

export default SkillsCard;

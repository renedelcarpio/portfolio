import './Skills.scss';

import React from 'react';
import SkillsCard from '../../common/SkillsCard/SkillsCard';
import { mySkills } from '../../../assets/mySkills/mySkills';

const Skills = () => {
	return (
		<div id='skills' className='skills'>
			<div className='skills__title'>
				<h4 className='about__discover'>What I Know</h4>
				<h1 className='about__title'>My Skills</h1>
				<hr size='2px' width='7%' color='#f45659' />
			</div>
			<div className='skills__cards'>
				{mySkills.map(({ name, icon, description, index }) => {
					return (
						<SkillsCard
							key={`${name}${index}`}
							name={name}
							icon={icon}
							description={description}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;

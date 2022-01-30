import './Projects.scss';

import ProjectCard from '../../common/ProjectCard/ProjectCard';
import { myPages } from '../../../assets/data/myProjects';

const Projects = () => {
	return (
		<div id='projects' className='projects'>
			<div className='projects__title'>
				<h4 className='about__discover'>What I Do</h4>
				<h1 className='about__title'>My Projects</h1>
				<hr size='2px' width='7%' color='#f45659' />
			</div>
			<div>
				{myPages.map(({ name, url, description, desktop, mobile, index }) => {
					return (
						<ProjectCard
							name={name}
							url={url}
							description={description}
							desktop={desktop}
							mobile={mobile}
							key={`${index}${name}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;

import React from 'react';
import {
	Navbar,
	Title,
	MenuContainer,
	MenuList,
	List,
	ListIcon,
	Button,
} from '../elements/elements';

const myName = '< rDelCarpio />';
const Header = () => {
	return (
		<Navbar>
			<Title>{myName}</Title>
			<MenuContainer>
				<MenuList>
					<List>
						<ListIcon>aboutMe</ListIcon>
					</List>
					<List>
						<ListIcon>experience</ListIcon>
					</List>
					<List>
						<ListIcon>myProjects</ListIcon>
					</List>
					<List>
						<ListIcon>contactMe</ListIcon>
					</List>
					<List></List>
				</MenuList>
				<Button>
					<ListIcon>resume</ListIcon>
				</Button>
			</MenuContainer>
		</Navbar>
	);
};

export default Header;

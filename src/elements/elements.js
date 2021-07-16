import styled from 'styled-components';

// Header components
const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5rem;
	background-color: #083d77cc;
`;

const Title = styled.h1`
	margin-left: 2rem;
	font-family: 'Roboto Mono';
	font-size: 2rem;
	font-weight: 500;
	cursor: pointer;
`;

const MenuContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
	align-items: center;
	margin-right: 2rem;
`;

const MenuList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
`;

const List = styled.li`
	margin-left: 2rem;
`;

const ListIcon = styled.a`
	font-family: 'Roboto Mono';
	font-size: 1.4rem;
	cursor: pointer;
`;

const Button = styled.button`
	background-color: transparent;
	padding: 1rem 2rem;
	border: solid 1px;
	border-radius: 1rem;
	cursor: pointer;
`;

export { Navbar, Title, MenuContainer, MenuList, List, ListIcon, Button };

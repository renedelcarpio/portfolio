import calcD from '../images/calcD.png';
import calcM from '../images/calcM.png';
import calleD from '../images/calleD.png';
import calleM from '../images/calleM.png';
import esVendiendoD from '../images/esVendiendoD.png';
import esVendiendoM from '../images/esVendiendoM.png';
import expenseD from '../images/expenseDesktop.png';
import expenseM from '../images/expenseMobile.png';
import heroD from '../images/heroD.png';
import heroM from '../images/heroM.png';

export const myPages = [
	{
		name: 'Expense Control',
		url: 'https://app-gastos-95f7b.web.app',
		description:
			'This project was created with React js in the frontend and Firebase for the backend and database. It allows you to register users and make a login. Once you are logged, you can make a CRUD with the expenses. In this app you can select the type of expense, the date and put the description and amount. Also you can see a list of expenses and de total of the month. I used useContext to handle de global states like session and total expenses.',
		desktop: expenseD,
		mobile: expenseM,
	},
	{
		name: 'Calculator',
		url: 'https://renedelcarpio.github.io/calculator/',
		description:
			'In this application I had fun, this is a simple calculator but the best part is that you can change the theme and choose the one you like the most. This app was developed in React js and work the styles with Sass.',
		desktop: calcD,
		mobile: calcM,
	},
	{
		name: 'Es Vendiendo',
		url: 'https://esvendiendo.com/',
		description:
			'Mi client needed a web page to grow his business and needed it fast, because of that I decided to use Wordpress to make this job. The work was done and everybody were happy.',
		desktop: esVendiendoD,
		mobile: esVendiendoM,
	},
	{
		name: 'Calle Performance',
		url: 'https://calleperformance.art/',
		description:
			'This web page is special for me, I helped a really good theatre artist to show what she does and grow her project, reach more people and make her performance festival be able to many artists. To make this job I used Wordpress.',
		desktop: calleD,
		mobile: calleM,
	},
	{
		name: 'Super hero router',
		url: 'https://calleperformance.art/',
		description:
			'This is a project to learn the new features of react-router-dom (V6). I used nesting routes and set a simple login to try public and private routes, I also implement tests with Jest and Enzyme.',
		desktop: heroD,
		mobile: heroM,
	},
];

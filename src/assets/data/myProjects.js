import calcD from '../images/calcD.png';
import calcM from '../images/calcM.png';
import calleD from '../images/calleD.png';
import calleM from '../images/calleM.png';
import esVendiendoD from '../images/esVendiendoD.png';
import esVendiendoM from '../images/esVendiendoM.png';
import expenseD from '../images/expenseDesktop.png';
import expenseM from '../images/expenseMobile.png';

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
		description: 'Some description must be here',
		desktop: calcD,
		mobile: calcM,
	},
	{
		name: 'Es Vendiendo',
		url: 'https://esvendiendo.com/',
		description: 'Some description must be here',
		desktop: esVendiendoD,
		mobile: esVendiendoM,
	},
	{
		name: 'Calle Performance',
		url: 'https://calleperformance.art/',
		description: 'Some description must be here',
		desktop: calleD,
		mobile: calleM,
	},
];

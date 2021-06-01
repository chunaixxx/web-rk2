import './main.sass'
import './toggler.sass'

const App = {
	data: () => ({
		dark: false,

		formListItems: 1,

		budgetary: [
			{
				title: 'Сборка за 30.000 рублей',
				desc: 'Бюджетный вариант для игр и учебы',
				url: 'https://st.overclockers.ru/legacy/blog/370824/119347_O.jpg',
				list: ['Материнская плата', 'Корпус', 'Видеокарта']
			},

			{
				title: 'Сборка за 20.000 рублей',
				desc: 'Бюджетный вариант для учебы',
				url: 'https://m.iguides.ru/upload/iblock/3c2/3c27f5880d47b0cbba37431fc491892a.jpg',
				list: ['Материнская плата', 'Корпус', 'Видеокарта']
			},

			{
				title: 'Сборка за 30.000 рублей',
				desc: 'Бюджетный вариант для игр и учебы',
				url: 'https://st.overclockers.ru/legacy/blog/370824/119347_O.jpg',
				list: ['Материнская плата', 'Корпус', 'Видеокарта']
			},
		],
		top: [{
			title: 'Мощный компьютер',
			desc: 'Компьютер из нового железа за 500.000 рублей',
			category: 'Топовые',
			url: 'https://robotcomp.ru/wa-data/public/shop/products/99/09/10999/images/25008/25008.970x0.jpg',
			list: ['Материнская плата sdfsd2342', 'корпус df456', '2 видеокарты 4096RTX3000']
		}],
		servers: [{
			title: 'Мощный сервер',
			desc: 'Сервер из нового железа за 2.500.000 рублей',
			url: 'https://timeweb.com/ru/community/article/64/64e16bc7ae700df6d35bffc9c361a4d2.jpg',
			list: ['Материнская плата sdfsd2342', 'корпус df456', '2 видеокарты 4096RTX3000']
		}],

		title: '',
		desc: '',
		category: 'Бюджетные',
		url: '',
		list: ''
	}),

	methods: {
		handleForm() {
			const newArticle = {
				title: this.title,
				desc: this.desc,
				url: this.url,
				list: this.list.split(', ')
			}

			switch (this.category) {
				case 'Бюджетные':
					this.budgetary.push(newArticle)
					break;

				case 'Топовые':
					this.top.push(newArticle)
					break;

				case 'Серверы':
					this.servers.push(newArticle)
					break;
			}

			this.title = '';
			this.desc = '';
			this.categore = 'Бюджетные';
			this.url = '';
			this.list = '';
		},
	}
}

Vue.createApp(App).mount('#app')
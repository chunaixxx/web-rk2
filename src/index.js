import './main.sass'
import './toggler.sass'

const App = {
	data: () => ({
		dark: false,

		budgetary: [],
		top: [],
		servers: [],

		title: '',
		desc: '',
		category: 'Бюджетные',
		url: ''
	}),

	methods: {
		handleForm() {
			console.log(this.category)

			const newArticle = {
				title: this.title,
				desc: this.desc,
				category: this.category,
				url: this.url,
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
		}
	}
}

Vue.createApp(App).mount('#app')
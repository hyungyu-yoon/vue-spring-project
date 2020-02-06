import axios from 'axios'

const SERVER_URL = 'http://localhost:8081'

const jwtDecode = (token, number) => {
	return JSON.parse(atob(token.split('.')[number]))
}

const auth = {
	state: {
		accessToken: '',
		username: '',
		isLogin: false,
	},
	actions: {
		login({ commit }, user) {
			axios.post(`${SERVER_URL}/authenticate`, user).then(response => {
				commit('setLoginInfo', response.data)
			})
		},
		logout({ commit }) {
			commit('clear')
		},
	},
	mutations: {
		setLoginInfo(state, data) {
			state.accessToken = data.token
			const payload = jwtDecode(data.token, 1)
			state.username = payload.sub
			state.isLogin = true

			axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
			localStorage.setItem('accessToken', data.token)
		},
		loadAuth(state) {
			const accessToken = localStorage.getItem('accessToken')
			if (accessToken === null) {
				return
			}
			const payload = jwtDecode(accessToken, 1)
			if (currentDate > payload.exp * 1000) {
				localStorage.setItem('accessToken', null)
				return
			}
			const currentDate = new Date().getTime()

			state.accessToken = accessToken
			state.username = payload.sub
			state.isLogin = true
		},
		clear(state) {
			state.username = ''
			state.accessToken = ''
			state.isLogin = false

			localStorage.setItem('accessToken', null)
			axios.defaults.headers.common['Authorization'] = undefined
		},
	},
	getters: {},
}

export default auth

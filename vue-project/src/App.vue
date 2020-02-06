<template>
	<v-app>
		<Header></Header>
		<v-content>
			<router-view></router-view>
		</v-content>
		<Footer></Footer>
	</v-app>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
	name: 'App',

	components: {
		Header,
		Footer,
	},

	data: () => ({
		//
	}),
	created() {
		this.$store.commit('loadAuth')
		console.log(this.$store.state.auth.isLogin)
	},
}
</script>

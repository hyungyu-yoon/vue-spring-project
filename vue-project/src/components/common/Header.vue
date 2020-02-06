<template>
	<v-app-bar app color="white">
		<v-app-bar-nav-icon></v-app-bar-nav-icon>

		<v-toolbar-title>Title</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-dialog
			v-model="dialog"
			width="400"
			v-if="this.$store.state.auth.isLogin === false"
		>
			<template v-slot:activator="{ on }">
				<v-btn color="red lighten-2" dark v-on="on">
					Login
				</v-btn>
			</template>

			<Login :dialog="dialog" />
		</v-dialog>
		<v-btn v-else @click="logout">Logout</v-btn>
	</v-app-bar>
</template>

<script>
import Login from '../Login.vue'
export default {
	components: { Login },
	data() {
		return {
			dialog: false,
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			this.dialog = false
		},
	},
}
</script>

<style></style>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="400"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Login
        </v-btn>
      </template>

      <Login :dialog="dialog" />
    </v-dialog>
  </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

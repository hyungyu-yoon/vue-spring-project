<template>
  <v-app>
    <v-content>
      <Home></Home>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>

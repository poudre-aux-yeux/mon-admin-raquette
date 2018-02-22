<template>
<v-app>
  <v-navigation-drawer v-model="drawer" clipped app></v-navigation-drawer>
  <v-toolbar color="orangefonce" clipped-left app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  </v-toolbar>
  <v-content app>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer fixed app></v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return ({
      drawer: false
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

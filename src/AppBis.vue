<template>
<v-app id="layout">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile click="path: '/adminpage/'">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Page Admin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile click="path : '/test'">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Gestion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="orangefonce" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Admin raquette</v-toolbar-title>
    </v-toolbar>
    <v-footer color="orangefonce" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
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


<!-- app de base-->
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

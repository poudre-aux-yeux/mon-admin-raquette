<template>
  <div class="adminpage">
    <h1>Page d'Admin</h1>
    <v-btn @click="changeRoute('/GameCreation/')" large color="error">
         <v-icon dark>add</v-icon>
         Créer un match
    </v-btn>
    <!--<h2>Gestions</h2>-->
    <v-btn @click="changeRoute('/gestionpage/')" large color="primary">Page de gestion</v-btn>
    <!--<v-btn @click="changeRoute('/gestionplayer/')" large color="primary">Joueurs</v-btn>
    <v-btn large color="warning">Arbitres</v-btn>
    <v-btn large color="success">Terrains</v-btn>-->
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data () {
    return ({
    })
  },
  methods: {
    changeRoute (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style>
    h1 {
        color: #F44336;
        font-size: 30px;
        padding-bottom: 50px;
    }
    h2 {
       color: rgb(22, 149, 223);
       font-size: 30px;
       padding-bottom: 30px;
       padding-top: 50px;
    }
</style>

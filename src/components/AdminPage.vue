<template>
  <div class="adminpage">
    <h1>Page d'Admin</h1>
    <v-btn v-on:click="buttonCreation" large color="error">
         <v-icon dark>add</v-icon>
         Créer un match
    </v-btn>
    <h2>Gestions</h2>
    <v-btn large color="primary">Joueurs</v-btn>
    <v-btn large color="warning">Arbitres</v-btn>
    <v-btn large color="success">Terrains</v-btn>
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
    buttonCreation: function () {
      this.$router.push({ path: '/test/' })
    }
  }
}
</script>

<style>
    .content
    {
        background-image: url("../assets/ball.jpg");
        background-size: cover
    }
    .login-container{
      background-image: url("https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb");
      background-size: cover;
    }
    h1 {
        color: #F44336;
        font-size: 30px;
        padding-bottom: 50px;
    }
    h2 {
       color: rgb(177, 153, 17);
       font-size: 30px;
       padding-bottom: 30px;
       padding-top: 50px;
    }
</style>

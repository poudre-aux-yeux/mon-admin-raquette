<template>
  <div class="gestionplayer">
    <h1>Joueurs</h1>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
           <v-icon>mdi-account-group</v-icon>
          <v-toolbar-title>Liste des joueurs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="item in items" :key="item.title" @click="changeRoute()">
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text= "item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="item.avatar" alt="avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    <v-btn v-on:click="buttonCreation" large color="success">
         <v-icon>mdi-account-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'GestionPlayer',
  data () {
    return ({
      items: [
        { icon: true, title: 'Jason Oner', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { title: 'Bob Razozski', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { title: 'Edouard Babouche', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { title: 'Jean-Eude Martin', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }
      ]
    })
  },
  methods: {
    buttonCreation: function () {
      this.$router.push({ path: '/PagePlayer/' })
    }
  }
}
</script>

<style>
    h1 {
        color: rgb(54, 130, 244);
    }
    .content
    {
        background-image: url("../assets/tennis.jpg");
        background-size: cover;
    }
</style>

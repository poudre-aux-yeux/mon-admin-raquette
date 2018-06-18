<template>
  <div class="gestionstadium">
    <h1>Joueurs</h1>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
           <v-icon>mdi-soccer-field</v-icon>
          <v-toolbar-title>Liste des terrains</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn> -->
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="stadium in stadiums" :key="stadium.id" @click="changeRoute(stadium.id)">
            <v-list-tile-content>
              <v-list-tile-title v-text="stadium.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="stadium.image" alt="avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    <v-btn v-on:click="buttonCreation" large color="success">
         <v-icon>mdi-shape-rectangle-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import PageStadium from '@/components/PageStadium'
import allStadium from '../graphql/allStadium.gql'
export default {
  name: 'GestionStadium',
  data () {
    return ({
      stadiums: []
    })
  },
  methods: {
    changeRoute (id) {
      this.$router.push({path: '/pagerstadium', name: 'PageStadium', component: PageStadium, params: { stadiumId: id }})
    },
    buttonCreation: function () {
      this.$router.push({path: '/pagestadium', name: 'PageStadium', component: PageStadium, params: { createStadium: true }})
    }
  },
  components: {
    PageStadium
  },
  apollo: {
    stadiums: {
      query: allStadium
    }
  }
}
</script>

<style>
  h1 {
    color: rgb(54, 130, 244);
  }
</style>

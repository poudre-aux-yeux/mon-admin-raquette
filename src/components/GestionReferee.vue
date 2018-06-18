<template>
  <div class="gestionreferee">
    <h1>Joueurs</h1>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
           <v-icon>mdi-account-group</v-icon>
          <v-toolbar-title>Liste des Arbitres</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn> -->
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="referee in tennisReferees" :key="referee.id" @click="changeRoute(referee.id)">
            <v-list-tile-content>
              <v-list-tile-title v-text="referee.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="referee.image" alt="avatar">
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
import allReferee from '../graphql/allReferee.gql'
import PageReferee from '@/components/PageReferee'
export default {
  name: 'GestionReferee',
  data () {
    return ({
      tennisReferees: []
    })
  },
  methods: {
    changeRoute (id) {
      this.$router.push({path: '/pagereferee', name: 'PageReferee', component: PageReferee, params: { refereeId: id }})
    },
    buttonCreation: function () {
      this.$router.push({path: '/pagereferee', name: 'PageReferee', component: PageReferee, params: { createReferee: true }})
    }
  },
  components: {
    PageReferee
  },
  apollo: {
    tennisReferees: {
      query: allReferee
    }
  }
}
</script>

<style>
  h1 {
    color: rgb(54, 130, 244);
  }
</style>

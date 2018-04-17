<template>
  <div class="pageplayer">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="https://randomuser.me/api/portraits/men/11.jpg" height="300px">
          <v-layout column class="media">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Boby Tulle</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile click="">
            <v-list-tile-action>
              <v-icon color="indigo">mdi-baby</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Date de naissance</v-list-tile-title>
              <v-list-tile-sub-title>20/08/1986</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nationalité</v-list-tile-title>
              <v-list-tile-sub-title>Française</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Poids</v-list-tile-title>
              <v-list-tile-sub-title>85 kg</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Rang</v-list-tile-title>
              <v-list-tile-sub-title>2300</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action>
              <v-icon color="indigo">mdi-format-title</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Titre</v-list-tile-title>
              <v-list-tile-sub-title>titre</v-list-tile-sub-title>
            </v-list-tile-content>
             </v-list-tile>
            <v-list-tile click="">
                 <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-title>Taille</v-list-tile-title>
              <v-list-tile-sub-title>1m80</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'PagePlayer',
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
</style>

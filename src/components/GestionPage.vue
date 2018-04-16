<template>
  <div class="gestionpage">
     <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar color="indigo" dark>
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-icon>mdi-tennis</v-icon>
        <v-toolbar-title>Gestion</v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon >account-edit</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon >add circle outline</v-icon>
                  </v-btn>
                  <v-btn icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'GestionPage',
  data: () => ({
    cards: [
      { title: 'Joueurs', src: '/static/player.jpg', flex: 12 },
      { title: 'Arbitres', src: '/static/racket.jpg', flex: 6 },
      { title: 'Terrains', src: '/static/terrain.jpg', flex: 6 }
    ]
  }),
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content
    {
        /*background-image: url("../assets/point.jpg");*/
        background-size: cover
    }
</style>

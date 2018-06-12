<template>
  <div class="pagestadium">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media v-if="createStadium === false" src="/static/stade-roland-garros.jpg" height="300px">
          <v-layout column class="media">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn @click="modeModif()" dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title v-if="createStadium === false" class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Roland Garros</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-card-media v-else height="300px" contain>
        </v-card-media>
        <v-list two-line>
          <v-list-tile  v-if="createStadium === true" click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nom</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="stadium.ground"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Type de sol</v-list-tile-title>
              <v-list-tile-sub-title v-if="createStadium === true">
                <v-text-field
                  v-model="stadium.ground"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{stadium.ground}}</div>
            </v-list-tile-content>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Ville</v-list-tile-title>
              <v-list-tile-sub-title v-if="createStadium === true">
                <v-text-field
                  v-model="stadium.city"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{stadium.city}}</div>
            </v-list-tile-content>
          </v-list-tile>
            <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-sub-title v-if="createStadium === true">
                <v-btn v-on:click="addStadium" dark large color="green accent-4" class="checkButton">
                    <v-icon>mdi-check-outline</v-icon>
                </v-btn>
              </v-list-tile-sub-title>
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
  props: {
    createStadium: Boolean,
    stadiumId: Number
  },
  name: 'PageStadium',
  data () {
    return ({
      stadium: {}
    })
  },
  methods: {
    changeRoute (route) {
      this.$router.push({ path: route })
    },
    addStadium () {
      this.createStadium = false
    },
    modeModif () {
      this.createStadium = !this.createStadium
    }
  }
}
</script>

<style>
.checkButton {
  margin-left: 80%;
}
.textForm {
  color: brown
}
</style>

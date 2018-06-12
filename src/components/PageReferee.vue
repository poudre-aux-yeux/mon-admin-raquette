<template>
  <div class="pagereferee">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media v-if="createReferee === false" src="https://randomuser.me/api/portraits/men/16.jpg" height="300px">
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
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Referee n°1</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
         <v-card-media v-else height="300px" contain>
        </v-card-media>
        <v-list two-line>
          <v-list-tile  v-if="createReferee === true" click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nom</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="referee.name"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            <v-list-tile-content>
              <v-list-tile-sub-title v-if="createReferee === true">
                <v-btn v-on:click="addReferee" dark large color="green accent-4" class="checkButton">
                    <v-icon>mdi-check-outline</v-icon>
                </v-btn>
              </v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    createReferee: Boolean,
    refereeId: Number
  },
  name: 'PageReferee',
  data () {
    return ({
      referee: {}
    })
  },
  methods: {
    changeRoute (route) {
      this.$router.push({ path: route })
    },
    addReferee () {
      this.createReferee = false
    },
    modeModif () {
      this.createReferee = !this.createReferee
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

<template>
  <div class="gamecreation">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-form ref="form">
          <v-layout class="form" row wrap>
            <v-flex xs12>
               <v-switch
                label="Double"
                v-model="duo"
              ></v-switch>
            </v-flex>
            <v-flex xs6>
              <v-select
                :items="players"
                item-text="name"
                item-value="id"
                v-model="firstplayer"
                label="Joueur 1"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-select
                :items="players"
                item-text="name"
                item-value="id"
                v-model="secondplayer"
                label="Joueur 2"
                single-line
              ></v-select>
            </v-flex>
            <v-flex v-if="duo" xs6>
              <v-select
                :items="players"
                item-text="name"
                item-value="id"
                v-model="firstplayer"
                label="Joueur 3"
                single-line
              ></v-select>
            </v-flex>
            <v-flex v-if="duo" xs6>
              <v-select
                :items="players"
                item-text="name"
                item-value="id"
                v-model="secondplayer"
                label="Joueur 4"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-select
                :items="tennisReferees"
                item-text="name"
                item-value="id"
                v-model="referee"
                label="Arbitre"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-select
                :items="stadiums"
                item-text="name"
                item-value="id"
                v-model="stadium"
                label="Stade"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                lazy
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  label="Date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-btn
              @click="submit"
            >CRÉER</v-btn>
          </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import allPlayers from '../graphql/allPlayers.gql'
import allReferee from '../graphql/allReferee.gql'
import allStadium from '../graphql/allStadium.gql'
import newMatch from '../graphql/newMatch.gql'

export default {
  data: () => ({
    valid: true,
    duo: false,
    date: '',
    modal: false,
    players: [],
    tennisReferees: [],
    stadiums: [],
    firstplayer: '',
    secondplayer: '',
    thirdplayer: '',
    fourthplayer: '',
    referee: '',
    stadium: ''
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log('Valid form')
        this.addPlayer()
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    convertDate (date) {
      let d = new Date(date)
      return d.toISOString()
    },
    addPlayer () {
      console.log('match ajouté')
      this.$apollo.mutate({
        // Query
        mutation: newMatch,
        variables: {
          date: this.convertDate(this.date),
          stdLink: this.stadium,
          refLink: this.referee,
          homePlayersLinks: (this.thirdplayer === '') ? [this.firstplayer] : [this.firstplayer, this.secondplayer],
          awayPlayersLinks: (this.thirdplayer === '') ? [this.secondplayer] : [this.thirdplayer, this.fourthplayer]
        }
      }).then((data) => {
        console.log(data)
        this.$router.go()
      }).catch((error) => {
        console.error(error)
      })
    }
  },

  apollo: {
    players: {
      query: allPlayers
    },
    tennisReferees: {
      query: allReferee
    },
    stadiums: {
      query: allStadium
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  padding: 20px;
}
</style>

<template>
  <div class="pageplayer">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-btn icon @click="modeModif()">
          <v-icon color="mattemonred">edit</v-icon>
        </v-btn>
        <v-layout class="form" row wrap>
          <v-flex xs6>
              <v-text-field
                v-model="player.name"
                label="Nom"
                v-if="editing"
              ></v-text-field>
              <div v-else class="textForm">{{player.name}}</div>
          </v-flex>
          <v-flex xs6>
            <div v-if="editing">
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="player.birth"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="player.birth"
                  label="Date de naissance"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="player.birth" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(player.birth)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div v-else class="textForm">{{player.birth}}</div>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-if="editing"
              v-model="player.nationality"
              label="Nationalité"
            ></v-text-field>
            <div v-else class="textForm">{{player.nationality}}</div>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-if="editing"
              v-model="player.weight"
              label="Poids"
              type="number"
            ></v-text-field>
            <div v-else class="textForm">{{player.weight}}</div>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-if="editing"
              v-model="player.height"
              label="Taille"
              type="number"
            ></v-text-field>
            <div v-else class="textForm">{{player.height}}</div>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-if="editing"
              v-model="player.ranking"
              label="Rank"
              type="number"
            ></v-text-field>
            <div v-else class="textForm">{{player.ranking}}</div>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-if="editing"
              v-model="player.titles"
              label="Titres"
              type="number"
            ></v-text-field>
            <div v-else class="textForm">{{player.titles}}</div>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-if="editing"
              v-model="player.image"
              label="Lien image"
            ></v-text-field>
            <div v-else class="textForm">{{player.image}}</div>
          </v-flex>
          <v-flex>
            <v-btn v-if="editing" v-on:click="addPlayer" dark large color="green accent-4" class="checkButton">
              <v-icon>mdi-check-outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
// import newPlayer from '../graphql/newPlayer.gql'
import getPlayer from '../graphql/getPlayer.gql'
export default {
  name: 'PagePlayer',
  data () {
    return ({
      menu: false,
      editing: false,
      player: {}
    })
  },
  props: {
    createPlayer: Boolean,
    playerId: String
  },
  created () {
    this.editing = this.createPlayer
  },
  methods: {
    convertDate (date) {
      let d = new Date(date)
      return d.toISOString()
    },
    modeModif () {
      this.editing = !this.editing
    },
    addPlayer () {
      this.editing = false
      console.log('joueur ajouté')
      // console.log({...this.player,
      //   birth: this.convertDate(this.player.birth),
      //   height: parseFloat(this.player.height),
      //   titles: parseInt(this.player.titles),
      //   ranking: parseFloat(this.player.ranking),
      //   weight: parseFloat(this.player.weight)
      // })
      /* this.$apollo.mutate({
        // Query
        mutation: newPlayer,
        variables: {...this.player,
          birth: this.convertDate(this.player.birth),
          height: parseFloat(this.player.height),
          titles: parseInt(this.player.titles),
          ranking: parseFloat(this.player.ranking),
          weight: parseFloat(this.player.weight)
        }
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.error(error)
      }) */
    }
  },
  apollo: {
    player: {
      query: getPlayer,
      variables () {
        return {
          id: this.playerId
        }
      }
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
.form {
  padding: 20px;
}
</style>

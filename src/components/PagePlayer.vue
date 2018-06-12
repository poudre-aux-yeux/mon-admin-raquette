<template>
  <div class="pageplayer">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media v-if="createPlayer === false" src="https://randomuser.me/api/portraits/men/17.jpg" height="300px" contain>
        <!-- <v-card-media src="player.image" height="300px" contain> -->
          <v-layout column class="media">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="modeModif()">
                <v-icon color="mattemonred">edit</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="mattemonred">more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card-media>
        <v-card-media v-else height="300px" contain>
        </v-card-media>
        <v-list two-line>
             <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nom</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.name"
                  placeholder="Nom"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.name}}</div>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action>
              <v-icon color="mattemonred">mdi-baby</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Date de naissance</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
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
                    label="Choisir dans le menu"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="player.birth" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(player.birth)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.birth}}</div>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nationalité</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.nationality"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.nationality}}</div>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Poids</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.weight"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.weight}}</div>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Rang</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.ranking"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.ranking}}</div>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action>
              <v-icon color="mattemonred">mdi-format-title</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Titre</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.titles"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.titles}}</div>
            </v-list-tile-content>
             </v-list-tile>
            <v-list-tile click="">
                 <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-title>Taille</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.height"
                ></v-text-field>
              </v-list-tile-sub-title>
              <div v-else class="textForm">{{player.height}}</div>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="createPlayer === true">
            <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content >
              <v-list-tile-title>Image</v-list-tile-title>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-text-field
                  v-model="player.image"
                ></v-text-field>
              </v-list-tile-sub-title>
              <!-- <div v-else class="textForm">{{player.image}}</div> -->
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-sub-title v-if="createPlayer === true">
                <v-btn v-on:click="addPlayer" dark large color="green accent-4" class="checkButton">
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
// import newPlayer from '../graphql/newPlayer.gql'
import getPlayer from '../graphql/getPlayer.gql'
export default {
  name: 'PagePlayer',
  data () {
    return ({
      menu: false,
      player: {}
    })
  },
  props: {
    createPlayer: Boolean,
    playerId: Number
  },
  methods: {
    convertDate (date) {
      let d = new Date(date)
      return d.toISOString()
    },
    modeModif () {
      this.createPlayer = !this.createPlayer
    },
    addPlayer () {
      this.createPlayer = false
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
    },
    apollo: {
      player: {
        query: getPlayer
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
</style>

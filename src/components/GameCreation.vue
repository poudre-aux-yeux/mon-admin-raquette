<template>
  <div class="gamecreation">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-form ref="form">
          <v-layout class="form" row wrap>
            <v-flex xs6>
              <v-select
                :items="playersList"
                v-model="firstplayer"
                label="Player 1"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-select
                :items="playersList"
                v-model="secondplayer"
                label="Player 2"
                single-line
              ></v-select>
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
export default {
  data: () => ({
    valid: true,
    date: '',
    playersList: [],
    refereeList: [],
    stadiumList: [],
    firstplayer: '',
    secondplayer: '',
    referee: '',
    stadium: ''
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log('Valid form')
      }
    },
    clear () {
      this.$refs.form.reset()
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

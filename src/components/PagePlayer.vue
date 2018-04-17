<template>
  <div class="pageplayer">
    <h1>Joueur</h1>
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

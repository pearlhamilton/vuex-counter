<template>
  <div class="home">
    <div class="counter">
      {{$store.state.counter}}
    </div>
    <div class="squared">
      {{$store.state.counter}}
      <sup>2</sup> = 
      {{$store.getters.squareNumber}}

    </div>
    <div class="buttons">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button>
    </div>
  <div>
    <!-- dispact the action, that calls the api, then commit the mutation-->
    <button @click="$store.dispatch('getRandomNumber')"> Get a random number :)
    </button>
    {{$store.state.randomNumber}}
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },

  // data(){
  //   return{
  //     counter: 0
  //   }
  // },

  // moved to store

  // methods: {
  //   increaseCounter(){
  //     this.counter++
  //   },
  //   decreaseCounter(){
  //     this.counter--
  //   }
  // }

  //moved to mutations
}
</script>

<style scoped>
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}

.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>

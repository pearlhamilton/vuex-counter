<template>
  <div class="home">
    <Counter/>
    <CounterSquared/>
    <Buttons/>
    <input placeholder="Enter a color" type="text" v-model="color">
  <div>
    <!-- dispact the action, that calls the api, then commit the mutation-->
    <button @click="$store.dispatch('getRandomNumber')"> Get a random number :)
    </button>
    {{$store.state.randomNumber}}
  </div>

  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import CounterSquared from '../components/CounterSquared.vue'
import Buttons from '../components/Buttons'

export default {
  name: 'Home',
  components: {
    Counter,
    CounterSquared,
    Buttons
    
  },
  computed: {color: {
    get(){
      return this.$store.state.color
    },
    set(newColor){
      this.$store.commit('changeColor', newColor)
    }
  }
  }

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

<style>
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

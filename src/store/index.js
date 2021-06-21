import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  // state is where the data is stored
  state: {
    counter: 0,
    randomNumber: null
  },
  // mutations are methods that change the data that is in the state. 
  // You can only change data in state by 'committing' or triggering a mutation
  // You cannot trigger ascynchronous code inside a mutation
  mutations: {

    increaseCounter(state){
        state.counter++
    },
    decreaseCounter(state){
          state.counter--
    },
    getRandomNumber(state, randomNumber){
      state.randomNumber = randomNumber

    }
  },
  // Actions are also methods but cannot change data in state
  //Actions commit a mutation which then changes data in state
  // You can have asynchronous code in actions i.e. to get data from an API and wait for a response, then commit a mutation to update state 
  // You dispatch an action
  actions: {
    getRandomNumber({commit}){
      axios.get('api/v1.0/random?min=100&max=1000&count=1', {

      })
      .then(response => {commit('getRandomNumber', response.data[0])
    })
      .catch(error => console.log(error))
    }
  },
  // Getters allow us to get data from state and modify it
  // You can access state directly from components however.
  getters:{
    squareNumber(state){
      return state.counter * state.counter

    }


  },
  // Allows us to break up our store into seperate modules with each module having its own state, mutations, actions and getters
  modules: {
  }
})

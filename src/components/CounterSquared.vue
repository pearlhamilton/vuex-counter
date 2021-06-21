<template>
        <div class="squared">
      {{$store.state.counter}}
      <sup>2</sup> = 
      {{$store.getters.squareNumber}}

    </div>
</template>
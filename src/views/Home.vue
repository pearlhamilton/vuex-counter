<template>
  <div class="home">
    <div class="counter">
      0
    </div>
    <div class="buttons">
      <button>+</button>
      <button>-</button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
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

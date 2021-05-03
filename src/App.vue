<template>
  <h3>TO DO LIST IN VUE</h3>
  <button @click="showComp" class="start-btn">{{ btnKnown }}</button>
  <!-- To Do list component rendered to the App -->
  <ToDo v-if="helloWorld"/>
</template>

// <script>
import ToDo from './components/ToDo'
export default {
  name: 'App',
  components: {
    ToDo
  } ,
  data() {
    return {
      helloWorld : false ,
      btnKnown : "Show App"
    }
  } ,
  methods: {
    showComp() {
      this.helloWorld = !this.helloWorld
      if( this.btnKnown === "Close App" ) this.btnKnown = "Show App"
      else this.btnKnown = "Close App"
      return 
    }
  }
}
</script>

<style>
body {
  background-color:whitesmoke
}
#app {
  font-family: Cabin ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}

.start-btn {
  height: 40px;
  width: 100px;
  background-color: blueviolet;
  border-radius: 3px;
  color:#fff;
  padding: 8px;
  border:none;
  opacity: 0.9;
}

.start-btn:hover {
  opacity: 1;
  cursor: pointer;
}


</style>

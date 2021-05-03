<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h3>TO DO LIST IN VUE</h3>
  <button @click="showComp">{{ btnKnown }}</button>
  <!-- <HelloWorld  msg="This is message from App.vue" v-if="helloWorld"/> -->
  <ToDo v-if="helloWorld"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComp from './components/MyComp.vue'
import ToDo from './components/ToDo'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComp,
    ToDo
  } ,
  data() {
    return {
      helloWorld : false ,
      btnKnown : "Show Components"
    }
  } ,
  methods: {
    showComp() {
      this.helloWorld = !this.helloWorld
      if( this.btnKnown === "Hide Components" ) this.btnKnown = "Show Components"
      else this.btnKnown = "Hide Components"
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
  font-family: Cabin;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
</style>

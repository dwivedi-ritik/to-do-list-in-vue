<template>
  <div class="hello">
    <h6>This is hello world </h6>
    <h6> {{ msg }}</h6>
    <img :src = "imgSrc[0]" width="300">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ["msg"] , 
  data() {
    return {
      imgSrc : ["https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX480"]
    }
  }
}
</script>

<style scoped>
.hello {
  align-items: center;
  font-size: 32px;
}
</style>

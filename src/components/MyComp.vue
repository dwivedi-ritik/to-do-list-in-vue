<template>
    <button @click="response()">retrive db</button>
</template>

<script>

import {retriveAllData , pushData} from "./link"
export default {
    methods : {
        response() {
            pushData()
            .then(obj=>console.log(obj))
        }       
    }
}

</script>

<style scoped>
</style>


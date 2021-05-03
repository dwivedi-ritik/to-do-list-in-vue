<template>
    <form class="inp-form">
        <input placeholder="Enter Your task" v-model="usrInp" id="form">
        <input type="submit" v-on:click="task" id="form-btn">
    </form>
</template>

<script>

export default {
    data(){
        return {
            usrInp:''
        }    
    } , 
    methods : {
        
        //Function for getting form input
        task(e){
            this.usrInp = ''
            e.preventDefault()
        }
    }
}
</script>

<style scoped>
#form {
    height: 40px;
    font-size: 12px;
    border: none;
    border-radius: 15px;
}

</style>


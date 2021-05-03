<template>
  <div class="front-layout">
    <form @submit.prevent="taskAdd">
      <input placeholder = "Enter your task" v-model="task" class="inp-task">
      <input type="button" value="Add Task" @click="taskAdd" class="add-task-btn">
    </form>
  </div>
  <div class="all-tasks" v-if="showTask">
    <div v-for = "(task , index) in allTasks"  :key="task.task" class="parent" @click="mark(index)">
      <span :class="{ done: task.done }"> {{ task.task }} </span>
      <!-- <button @click="removeTodo(index)" class="close">remove</button> -->
      <!-- <button @click="mark(index)">{{ task.completion }}</button> -->
      <img src="../../x-mark-32.png" class="cross" height="8" @click="removeTodo(index)">
    </div>
  </div>
</template>

<script>
export default {
  name : "ToDo" ,
  data() {
    return {
      task : '' , 
      showTask : false,
      allTasks : []
    }
  } , 
  methods: {
    taskAdd() {
      if (this.task != '') {
        this.showTask = true
        this.allTasks.push(
        {"task" : this.task ,
        "done" : false , 
        "completion" : "Mark Done"})
      }
      this.task = ''
     } , 

    removeTodo(index){
      this.allTasks.splice(index , 1)
    } ,

    mark(index) {
      if(this.allTasks[index].completion === "Mark Done") this.allTasks[index].completion = "Unmark"
      else this.allTasks[index].completion = "Mark Done"
      this.allTasks[index].done = !this.allTasks[index].done
    }
  }  

}
</script>

<style>
.front-layout {
  margin-top: 50px;
}
.all-tasks {
  display: flex;
  flex-direction: column;
  justify-content:center; 
  align-items: center;
  margin-top: 30px;
}
.done {
  text-decoration: line-through;
  font-style: italic;
}

.inp-task {
  min-width: 250px;
  height: 25px;
  padding: 6px;
  border-radius: 5px 0px 0px 5px;
  outline: none;
  border: 3px solid blueviolet;
}
.add-task-btn {
  width: 70px;
  height: 43px;
  color: white;
  background-color: blueviolet;
  border:none;
  border-radius: 0px 5px 5px 0px;
  opacity: 0.9;
}

.add-task-btn:hover {
  cursor: pointer;
  opacity: 1;
}

.parent {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  position: relative;
  font-weight: 400;
  width: 300px;
  min-height: 40px;
  max-height: auto;
  background-color:blueviolet;
  border-radius: 0px 10px 0px 10px;
  font-size: 15px;
  align-items: center;
  padding:5px;
  color:#fff;
  box-shadow: 2px 2px 6px 0px rgba(0 , 0 , 0 , .25);
  opacity: 0.9;
}

.parent span {
  padding: 10px 15px;
}
.parent:hover{
  cursor: pointer;
  opacity: 1;
  box-shadow: 4px 4px 6px 0px rgba(0 , 0 , 0 , .25);

}
.cross{
  position: absolute;
  right: 2%;
  top:15%; 
}

.cross:hover {
  cursor: pointer;

}
</style>
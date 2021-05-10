<template>
  <div class="front-layout">
    <form @submit.prevent="taskAdd">
      <input placeholder = "Enter your task" v-model="task" class="inp-task">
      <input type="button" value="Add Task" @click="taskAdd" class="add-task-btn">
    </form>
  </div>
  <div class="all-tasks">
    <div v-for = " (el , index) in allTasks"  :key="el.id" class="parent">
      <span :class="{ done: el.completion }" @click="mark(el.id , index)"> {{ el.task }} </span>
      <div class="delete" @click="removeTodo(el.id , index)">
        <img src="../../assets/cross.png" class="cross" height="8">
      </div>
    </div>
  </div>
</template>

<script>
//Linking to the database and some basic crud functions
import {retriveAllData , pushData , completionMark , deleteData} from "./link"
import { firestoreDb, timeStamp } from "../db/firebasedb"

export default {
  name : "ToDo" ,
  props:["Tasks"],
  data() {
    return {
      task : '',
      allTasks: this.Tasks
    }
  },
  methods: {
    taskAdd() {
      if (this.task != '') {
        let currTask = {
          "task":this.task,
          "completion":false,
          "created_at":timeStamp()
        }
        this.allTasks.push(currTask)
        pushData(currTask)
        .then(()=>console.log("Added to doc"))
        .catch(err=>console.log(err))
      }
      this.task = ''
    },
    removeTodo(id , index){
      this.allTasks.splice(index , 1)
      deleteData(id)
      .then(()=>console.log("Deletion Done"))
      .catch(err=>console.log(err))
    },
    mark(id , index) {
      this.allTasks[index].completion = !this.allTasks[index].completion
      let mark = this.allTasks[index].completion
      completionMark(id , mark)
      .then(()=>console.log("Marking Done"))
      .catch(err=>console.log(err))
    },
  },
  mounted(){
    if(this.allTasks === undefined || this.Tasks.length === 0){
      retriveAllData().then(res=> this.allTasks = res) 
    }
    //Check Lol Worlks
    //.onSnapshot used for realtime updating the database
    firestoreDb.collection("todo").orderBy("created_at" , "asc").onSnapshot((doc)=>{
      let tasks = []
      doc.forEach(obj=>{
        tasks.push({
          "task":obj.data().task,
          "completion":obj.data().completion,
          "created_at": obj.data().created_at
        })
      })
      this.allTasks = tasks
    })
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
  cursor: pointer;
}
.parent:hover{
  opacity: 1;
  box-shadow: 4px 4px 6px 0px rgba(0 , 0 , 0 , .25);

}
.cross{
  position: relative;
  right: 5%;
  top:15%; 
}

.cross:hover {
  cursor: pointer;

}
.delete {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>